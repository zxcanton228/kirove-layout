import inquirer from 'inquirer'
import { authorizationPrompt } from './../environments'
import { backendStateMachine } from './../state-machine'

export async function getBackendEnvironment(): Promise<boolean> {
  // @ts-ignore
  const { authorizationType } = await inquirer.prompt(authorizationPrompt)

  backendStateMachine.authorizationType = authorizationType

  return true
}
