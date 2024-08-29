import inquirer from 'inquirer'
import { globalStateMachine } from './state-machine'
import { EnumLayoutType, EnumProcessManager } from './types'

export const enumMethod = (enu): string[] => {
  const array: string[] = []
  for (let item in enu) {
    if (isNaN(Number(item))) {
      array.push(item)
    }
  }
  return array
}

export async function getGlobalEnvironment(): Promise<boolean> {
  // @ts-ignore
  const { layoutType, pm } = await inquirer.prompt([
    {
      type: 'list',
      name: 'layoutType',
      message: 'What do you want to prepare? 🧱',
      choices: enumMethod(EnumLayoutType),
    },
    {
      type: 'list',
      name: 'pm',
      message: 'Which package manager would you to use? 📂',
      choices: enumMethod(EnumProcessManager),
    },
  ])

  globalStateMachine.processManager = pm as EnumProcessManager
  globalStateMachine.layoutType = layoutType as EnumLayoutType

  return true
}

export const authorizationPrompt = [
  {
    type: 'list',
    name: 'authorizationType',
    message: 'What type of authorization do you want to use? 🔑',
    choices: ['🔓None', '🔒Default', '🔐Perfect'],
  },
]
