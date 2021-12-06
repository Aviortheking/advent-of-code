import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()

var previous = Infinity
console.log("Result: " +
	input.split('\n').reduce((p, c) => {
		const tmp = previous
		previous = parseInt(c)
		return tmp < previous ? p + 1 : p
	}, 0)
)