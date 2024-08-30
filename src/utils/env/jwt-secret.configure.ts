const insertProjectName = (jwtKeyOrig: string, projectName: string) => {
	const jwtKey = jwtKeyOrig.slice(0, projectName.length * -1)
	const position = Math.floor(Math.random() * (255 - 1) + 1)

	const insertWord = projectName.toUpperCase()

	const output = [
		jwtKey.slice(0, position),
		insertWord,
		jwtKey.slice(position),
	].join("")
	return output
}

const jwtSecretConfigure = (projectName: string): string => {
	let result: string = ""
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+;:.>,<?/|}]{[]}"
	for (let i: number = 0; i < 255; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length))
	}
	const key = insertProjectName(result, projectName)
	return key
}

export default jwtSecretConfigure
