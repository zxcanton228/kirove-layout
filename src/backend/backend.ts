import appRootPath from 'app-root-path'
import { access } from 'fs-extra'
import terminal from './../core/terminal/terminal'
import { globalStateMachine } from './../state-machine'

export default async function backend(): Promise<boolean> {
	const { packageManager, projectName } = globalStateMachine
	await terminal(`nest new ${projectName} -s -g -p ${packageManager}`)

	access(appRootPath + '/test-project', err => {
		if (err) console.error(err)
		console.log('Yes')
	})

	return true
}
