import { getGlobalEnvironment } from './get-environments'
import { globalStateMachine } from './state-machine'
import { EnumLayoutType } from './types/types'
import logger from './utils/logger/logger'
async function bootstrap() {
	await getGlobalEnvironment()

	switch (globalStateMachine.layoutType) {
		case EnumLayoutType.backend:
			const backend = (await import('./backend/backend')).default
			await backend()
			break
		case EnumLayoutType.frontend:
			const frontend = (await import('./frontend/frontend')).default
			await frontend()
			break
		default:
			throw new Error('Layout type is not passed')
	}
}

bootstrap()
	.then(() =>
		console.log(logger.success('The template has been successfully created!'))
	)
	.catch(error => {
		console.error(logger.error(error))
		process.exit(1)
	})
	.finally(() => console.log(logger.system('Process finished', '⏸️ ')))
