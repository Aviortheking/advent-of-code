import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('')

let v = 0
for (let i = 0; i < input.length; i++) {
	const item = input[i];
	if (item === '(') {
		v++
		continue
	}
	if (--v < 0) {
		console.log(
			"Result:", i + 1
		)
		break
	}
}