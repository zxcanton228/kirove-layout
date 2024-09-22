import { readFileSync } from 'fs-extra'
import logger from '../../utils/logger/logger'
import terminal from '../terminal/terminal'
import { globalStateMachine } from './../../state-machine'
import { EnumPackageManager } from './../../types/types'

interface IDeps {
	dep: string[]
	devDep: string[]
}

class NodeModulesService {
	public async install(filePath?: string): Promise<void> {
		const { packageManager, projectName } = globalStateMachine
		console.log(logger.system('Install deps...'))
		try {
			await terminal(
				`cd ${projectName} && ${
					packageManager === EnumPackageManager.yarn ? 'yarn' : packageManager
				}`
			)
			if (filePath) this.add(filePath)
			console.log(logger.success('Deps installed!'))
		} catch (error) {
			throw new Error(error)
		}
	}
	private async add(filePath: string): Promise<void> {
		let obj: IDeps
		const { packageManager } = globalStateMachine
		readFileSync(filePath, 'utf8', (err, data) => {
			if (err) throw err
			obj = JSON.parse(data)
		})
		const command = `${packageManager} ${
			packageManager === EnumPackageManager.npm ? 'install' : 'add'
		}`

		terminal(`${command} ${obj.dep.join(' ')}`)
		terminal(`${command} -D ${obj.devDep.join(' ')}`)
	}
}
export default new NodeModulesService()
