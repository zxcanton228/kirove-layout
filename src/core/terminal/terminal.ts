interface ITerminalProps {
	command: string
	onSuccess?: () => void
	onError?: () => void
}
/**
 * The usual use of the command in the terminal using exec
 * @param {object} {
	command,
	onError,
	onSuccess,
} - params
 */
const terminal = async ({
	command,
	onError,
	onSuccess,
}: ITerminalProps): Promise<boolean /* ITerminal */> => {
	const { exec } = (await import('child_process')).default
	const child = exec(
		command,
		err => err && console.error('Terminal error: ' + err)
	)
	onSuccess && child.on('exit', onSuccess)
	onError && child.on('error', onError)
	return true
}
export default terminal
