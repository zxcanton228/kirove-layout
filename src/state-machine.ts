import appRootPath from 'app-root-path'
import {
	EnumAuthorizationType,
	EnumLayoutType,
	EnumPackageManager,
	type IStateMachine,
} from './types/types'
import isDev from './utils/env/isDev'

export const globalStateMachine: IStateMachine = {
	projectName: 'test-project',
	packageManager: EnumPackageManager.yarn,

	programPath: isDev ? appRootPath.toString() : process.argv.slice(2)[0],
	assetsPath: appRootPath.toString() + '/assets',

	layoutType: EnumLayoutType.backend,

	authorizationType: EnumAuthorizationType.none,
	jwtSecret: '',
}
// export const backendStateMachine: IBackendStateMachine = {
// 	isDependenciesInstalled: false,
// }
