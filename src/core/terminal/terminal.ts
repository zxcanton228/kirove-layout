import { exec } from 'child_process'
import isDev from './../../utils/env/isDev'
/**
 * The usual use of the command in the terminal using exec
 * @param {string} command - Command
 */

const terminal = async (command: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		exec(command, async (error, stdout) => {
			if (error) {
				const { bgRedBright, white } = await import('chalk')
				console.error(bgRedBright(white('🛑Terminal error: ' + error)))
				reject(error)
			} else {
				if (isDev) console.log(stdout)

				resolve()
			}
		})
	})
}
export default terminal
