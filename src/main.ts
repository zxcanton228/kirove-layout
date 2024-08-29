import { getBackendEnvironment } from './backend/backend.environments'
import { getGlobalEnvironment } from './environments'
import { getFrontendEnvironment } from './frontend/frontend.environments'
import logger from './logger/logger'
import { globalStateMachine } from './state-machine'
import { EnumLayoutType } from './types'

async function bootstrap() {
  await getGlobalEnvironment()

  console.log(globalStateMachine.layoutType)

  if (globalStateMachine.layoutType === EnumLayoutType.backend) {
    await getBackendEnvironment()
  } else if (globalStateMachine.layoutType === EnumLayoutType.frontend) {
    await getFrontendEnvironment()
    return
  } else {
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
