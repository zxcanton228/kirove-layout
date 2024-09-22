import appRootPath from 'app-root-path'
import { access, rm } from 'fs-extra'

const testPath = appRootPath + '/test-project'

export default function remDir() {
	access(testPath, () =>
		rm(testPath, { recursive: true }, err => err && console.error(err))
	)
}
