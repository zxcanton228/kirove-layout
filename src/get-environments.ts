import inquirer from "inquirer"
import { globalStateMachine } from "./state-machine"
import {
	EnumAuthorizationType,
	EnumLayoutType,
	EnumProcessManager,
} from "./types/types"
import enumMethod from "./utils/enum-method.util"
import jwtSecretConfigure from "./utils/env/jwt-secret.configure"

export async function getGlobalEnvironment(): Promise<boolean> {
	const { layoutType, pm, authorizationType, projectName: pn } =
		// @ts-ignore
		await inquirer.prompt([
			{
				type: "input",
				name: "projectName",
				message: "What do you call the project? 🪪",
				default: "test-project",
			},
			{
				type: "list",
				name: "layoutType",
				message: "What do you want to prepare? 🧱",
				choices: enumMethod(EnumLayoutType),
				default: EnumLayoutType.backend,
			},
			{
				type: "list",
				name: "pm",
				message: "Which package manager would you to use? 📂",
				choices: enumMethod(EnumProcessManager),
				default: EnumProcessManager.yarn,
			},
			{
				type: "list",
				name: "authorizationType",
				message: "What type of authorization do you want to use? 🔑",
				// choices: ['🔓None', '🔒Default', '🔐Perfect'],
				choices: enumMethod(EnumAuthorizationType),
				default: EnumAuthorizationType.default,
			},
		])

	const projectName = pn.replace(/ /g, "-")

	globalStateMachine.processManager = pm as EnumProcessManager
	globalStateMachine.layoutType = layoutType as EnumLayoutType
	globalStateMachine.authorizationType =
		authorizationType as EnumAuthorizationType
	globalStateMachine.projectName = projectName
	globalStateMachine.jwtSecret = jwtSecretConfigure(projectName)
	globalStateMachine.programPath =
		process.argv.slice(2)[0] || globalStateMachine.programPath
	return true
}
