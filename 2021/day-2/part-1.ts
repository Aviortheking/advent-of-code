import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')

var x = 0
var y = 0
for (const line of input) {
	const splitted = line.split(' ')
	const action = splitted[0]
	const value = parseInt(splitted[1])

	switch (action) {
		case 'forward':
			x += value
			break
		case 'up':
			y -= value
			break
		case 'down':
			y += value
			break
	}
}

console.log(`Result: ${x * y}`)