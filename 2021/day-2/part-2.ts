import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')

var positionX = 0
var depth = 0
var aim = 0
for (const line of input) {
	const splitted = line.split(' ')
	const action = splitted[0]
	const value = parseInt(splitted[1])

	switch (action) {
		case 'forward':
			positionX += value
			depth += aim * value
			break
		case 'up':
			aim -= value
			break
		case 'down':
			aim += value
			break
	}
}

console.log(`Result: ${positionX} * ${depth} =  ${positionX * depth}`)