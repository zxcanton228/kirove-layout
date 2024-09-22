import nodeModulesService from './../core/services/node-modules.service'
import terminal from './../core/terminal/terminal'
import { globalStateMachine } from './../state-machine'

export default async function backend(): Promise<boolean> {
	const { packageManager, projectName } = globalStateMachine

	await terminal(`nest new ${projectName} -s -g -p ${packageManager}`)
	nodeModulesService.install()
	console.log('sperma')

	// access(appRootPath + '/test-project', err => {
	// 	if (err) console.error(err)
	// 	console.log('Yes')
	// })

	return true
}
