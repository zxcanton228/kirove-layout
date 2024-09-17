import { globalStateMachine } from './../../state-machine'

class FileService {
	constructor(private readonly assetsPath: string) {}

	public newFile(pathToNewFile: string) {
		console.log(this.assetsPath)
	}
	public deleteFile(pathToFiles: string | string[]) {
		console.log(this.assetsPath)
	}
	public updateFile(pathToFile: string, data: any) {
		console.log(this.assetsPath)
	}
	public copyFromAssets(pathToRelocate: string) {
		console.log(this.assetsPath)
	}
}
export default new FileService(globalStateMachine.assetsPath)
