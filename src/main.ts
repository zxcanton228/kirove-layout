import { getGlobalEnvironment } from './get-environments'
import { globalStateMachine } from './state-machine'
import { EnumLayoutType } from './types/types'
import isDev from './utils/env/isDev'
import logger from './utils/logger/logger'
import remDir from './utils/remdir.util'
async function bootstrap() {
	isDev && remDir()
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
	}
}

bootstrap().catch(error => {
	console.error(logger.error(error))
	process.exit(1)
})
// .then(() =>
// 	console.log(logger.success('The template has been successfully created!'))
// )
// .finally(() => console.log(logger.system('Process finished', '⏸️ ')))
