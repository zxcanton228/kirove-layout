import inquirer from 'inquirer'
import { globalStateMachine } from './state-machine'
import {
	EnumAuthorizationType,
	EnumLayoutType,
	EnumPackageManager,
} from './types/types'
import enumMethod from './utils/enum-method.util'
import jwtSecretConfigure from './utils/env/jwt-secret.configure'

export async function getGlobalEnvironment(): Promise<boolean> {
	const { layoutType, pm, authorizationType, projectName: pn } =
		// @ts-ignore
		await inquirer.prompt([
			{
				type: 'input',
				name: 'projectName',
				message: 'What do you call the project? 🪪',
				default: 'test-project',
			},
			{
				type: 'list',
				name: 'layoutType',
				message: 'What do you want to prepare? 🧱',
				choices: enumMethod(EnumLayoutType),
				default: EnumLayoutType.backend,
			},
			{
				type: 'list',
				name: 'pm',
				message: 'Which package manager would you to use? 📂',
				choices: enumMethod(EnumPackageManager),
				default: EnumPackageManager.yarn,
			},
			{
				type: 'list',
				name: 'authorizationType',
				message: 'What type of authorization do you want to use? 🔑',
				// choices: ['🔓None', '🔒Default', '🔐Perfect'],
				choices: enumMethod(EnumAuthorizationType),
				default: EnumAuthorizationType.default,
			},
		])

	const projectName = pn.replace(/ /g, '-')

	Object.assign(globalStateMachine, {
		processManager: pm as EnumPackageManager,
		layoutType: layoutType as EnumLayoutType,
		authorizationType: authorizationType as EnumAuthorizationType,
		projectName,
		jwtSecret: jwtSecretConfigure(projectName),
	})

	return true
}
