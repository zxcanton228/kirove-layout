import {
	EnumAuthorizationType,
	EnumLayoutType,
	EnumProcessManager,
	type IBackendStateMachine,
	type IStateMachine,
} from "./types/types"

export const globalStateMachine: IStateMachine = {
	projectName: "test-project",
	processManager: EnumProcessManager.yarn,
	programPath: "C:\\Users\\kiril\\Desktop\\kirove-layout",

	layoutType: EnumLayoutType.backend,

	authorizationType: EnumAuthorizationType.none,
	jwtSecret: "",
}
export const backendStateMachine: IBackendStateMachine = {
	isDependenciesInstalled: false,
}
