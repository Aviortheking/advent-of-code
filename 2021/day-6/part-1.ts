import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split(',').map((it) => parseInt(it))

const numberOfDays = 80
const LOG = false

if (LOG) console.log("Initial state:", input)

for (let i = 1; i <= numberOfDays; i++) {
	const len = input.length
	for (let j = 0; j < len; j++) {
		if (input[j] === 0) {
			input[j] = 6
			input.push(8)
		} else {
			input[j]--
		}
	}

	if (LOG) console.log("After", i, "days:", input)
	
}

console.log(
	"Result:", input.length
)
