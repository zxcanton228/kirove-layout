import { bgRedBright, white } from 'chalk'
import { exec } from 'child_process'
import isDev from './../../utils/env/isDev'
/**
 * The usual use of the command in the terminal using exec
 * @param {string} command - Command
 */
const terminal = async (command: string): Promise<void> => {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout) => {
			if (error) {
				console.error(bgRedBright(white('🛑Terminal error: ' + error)))
				reject(error)
			} else {
				if (isDev) {
					console.log(stdout)
				}
				resolve()
			}
		})
	})
}
export default terminal
