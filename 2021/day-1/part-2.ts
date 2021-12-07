import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()

const items = input.split('\n')

var previous = Infinity
var count = 0

for (let i = 0; i < items.length - 3; i++) {
	const sum = parseInt(items[i]) + parseInt(items[i + 1]) + parseInt(items[i + 2])
	if (sum > previous) {
		count++
	}

	previous = sum
}

console.log(`Result: ${count}`)