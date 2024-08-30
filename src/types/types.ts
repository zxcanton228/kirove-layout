export enum EnumProcessManager {
	pnpm = "pnpm",
	npm = "npm",
	bun = "bun",
	yarn = "yarn",
}
export enum EnumLayoutType {
	frontend = "frontend",
	backend = "backend",
}
export enum EnumAuthorizationType {
	none = "none",
	default = "default",
	perfect = "perfect",
}

export interface IStateMachine {
	projectName: string
	processManager: EnumProcessManager
	programPath: string
	layoutType: EnumLayoutType
	authorizationType: EnumAuthorizationType
	jwtSecret: string
}
export interface IBackendStateMachine {
	isDependenciesInstalled: boolean
}
