import inquirer from 'inquirer'
import { authorizationPrompt } from './../environments'
import { backendStateMachine as frontendStateMachine } from './../state-machine'

export async function getFrontendEnvironment(): Promise<boolean> {
  // @ts-ignore
  const { authorizationType } = await inquirer.prompt(authorizationPrompt)

  frontendStateMachine.authorizationType = authorizationType

  return true
}
