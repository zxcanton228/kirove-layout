import { exec } from "child_process"

const terminal = (command: string) => exec(command)

export default terminal
