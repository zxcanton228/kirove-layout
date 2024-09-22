import { EnumAuthorizationType } from '../types/types'
import nodeModulesService from './../core/services/node-modules.service'
import terminal from './../core/terminal/terminal'
import { globalStateMachine } from './../state-machine'

export default async function backend(): Promise<boolean> {
	const { packageManager, projectName, authorizationType } = globalStateMachine

	await terminal(`nest new ${projectName} -s -g -p ${packageManager}`)
	switch (authorizationType) {
		case EnumAuthorizationType.none:
			nodeModulesService.install()
			break
		case EnumAuthorizationType.perfect:
			nodeModulesService.install()
			break
		case EnumAuthorizationType.default:
			nodeModulesService.install()
			break
	}

	// access(appRootPath + '/test-project', err => {
	// 	if (err) console.error(err)
	// 	console.log('Yes')
	// })

	return true
}
