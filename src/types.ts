export enum EnumProcessManager {
  pnpm = 'pnpm',
  npm = 'npm',
  bun = 'bun',
  yarn = 'yarn',
}
export enum EnumLayoutType {
  frontend = 'frontend',
  backend = 'backend',
}
export enum EnumAuthorizationType {
  none = 'none',
  default = 'default',
  perfect = 'perfect',
}

export interface IStateMachine {
  processManager: EnumProcessManager
  layoutType: EnumLayoutType
  authorizationType: EnumAuthorizationType
}
export interface IBackendStateMachine {
  isDependenciesInstalled: boolean
}
