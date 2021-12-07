import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split(',')
	.map((it) => parseInt(it))
	.sort((a, b) => a - b)

function costToLocation(values: Array<number>, value: number) {
	return values.reduce((p, c) => {
		let diff = Math.abs(c - value)
		let mod = 0
		while (diff > 0) {
			mod += diff
			diff--
		}
		return p + mod
	}, 0)
}

const min = input[0]
const max = input[input.length - 1]

let cost = Infinity

// this is so ugy it hurts me
// BUT it works like a charm!
for (let index = min; index < max; index++) {
	const localCost = costToLocation(input, index)
	if (localCost < cost) {
		cost = localCost
	}
	
}

console.log(
	"least moves:", cost
)
