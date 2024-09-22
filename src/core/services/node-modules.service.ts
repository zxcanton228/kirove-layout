import logger from '../../utils/logger/logger'
import terminal from '../terminal/terminal'
import { globalStateMachine } from './../../state-machine'
import { EnumPackageManager } from './../../types/types'

class NodeModulesService {
	async install(): Promise<boolean> {
		const { packageManager, projectName } = globalStateMachine
		console.log(logger.system('Install deps...'))
		try {
			await terminal(
				`cd ${projectName} && ${
					packageManager === EnumPackageManager.yarn ? 'yarn' : packageManager
				}`
			)
			console.log(logger.success('Deps installed!'))
			return true
		} catch (error) {
			throw new Error(error)
		}
	}
}
export default new NodeModulesService()
