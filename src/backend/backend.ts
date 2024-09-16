import terminal from 'src/core/terminal/terminal'
import { globalStateMachine } from 'src/state-machine'

export default async function backend() {
	const { packageManager, projectName } = globalStateMachine
	terminal({
		command: `nest new ${projectName} -s -g -p ${packageManager}`,
	})
	// More code
}
