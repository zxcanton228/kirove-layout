import { bgGray, bgGreen, bgRed, bgYellow, bold, white } from "chalk"
class Logger {
	public success(msg: string): string {
		return bgGreen(this.bolder(`✅ ${msg}`))
	}
	public error(msg: string): string {
		return bgRed(this.bolder(`🛑 ${msg}`))
	}
	public warning(msg: string): string {
		return bgYellow(this.bolder(`⚠️ ${msg}`))
	}
	public system(msg: string, emoji?: string): string {
		return bgGray(this.bolder(`${emoji ? emoji : "🖥️"} ${msg}`))
	}
	private bolder(msg: string): string {
		return white(bold(msg))
	}
}
export default new Logger()
