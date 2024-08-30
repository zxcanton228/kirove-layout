import { getBackendEnvironment } from './backend/backend.environments'
import { getGlobalEnvironment } from './environments'
import { getFrontendEnvironment } from './frontend/frontend.environments'
import { globalStateMachine } from './state-machine'
import { EnumLayoutType } from './types'
import logger from './utils/logger/logger'

async function bootstrap() {
  await getGlobalEnvironment()

  console.log(globalStateMachine.layoutType)

  switch (globalStateMachine.layoutType) {
    case EnumLayoutType.backend:
      await getBackendEnvironment()
      logger.system('backend')
      break
    case EnumLayoutType.frontend:
      await getFrontendEnvironment()
      logger.system('frontend')
      break
    default:
      throw new Error('Layout type is not passed')
  }
}

bootstrap()
  .then(() =>
    console.log(logger.success('The template has been successfully created!')),
  )
  .catch(error => {
    console.error(logger.error(error))
    process.exit(1)
  })
  .finally(() => console.log(logger.system('Process finished', '⏸️ ')))
