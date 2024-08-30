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
  authorizationType: EnumAuthorizationType.none,
}
export const backendStateMachine: IBackendStateMachine = {
  isDependenciesInstalled: false,
}
