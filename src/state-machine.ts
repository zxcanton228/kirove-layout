import {
  EnumAuthorizationType,
  EnumLayoutType,
  EnumProcessManager,
  type IBackendStateMachine,
  type IStateMachine,
} from './types'

export const globalStateMachine: IStateMachine = {
  processManager: EnumProcessManager.yarn,
  layoutType: EnumLayoutType.backend,
}
export const backendStateMachine: IBackendStateMachine = {
  isDependenciesInstalled: false,
  authorizationType: EnumAuthorizationType.none,
}
