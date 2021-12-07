import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('')

console.log(
	"Result:", input.reduce((p, c) => p + (c === '(' ? 1 : -1), 0)
)