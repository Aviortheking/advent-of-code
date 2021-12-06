import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split(',').map((it) => parseInt(it))

const numberOfDays = 256
const LOG = false


const list: Record<number, number> = {}

for (const fishy of input) {
	if (!(fishy in list)) {
		list[fishy] = 0
	}
	list[fishy]++
}

if (LOG) console.log("Initial state:", list, Object.values(list).reduce((p, c) => p + c, 0))

for (let i = 1; i <= numberOfDays; i++) {
	let newBorns = 0
	for (let v = 0;  v <= 8; v++) {
		if (!(v in list)) {
			list[v] = 0
		}
		if (v === 0) {
			newBorns = list[v] ?? 0
		} else {
			list[v - 1] = list[v]
		}
	}
	list[8] = newBorns
	list[6] = newBorns + (list[6] ?? 0)
	

	if (LOG) console.log("After", i, "days:", list, Object.values(list).reduce((p, c) => p + c, 0))
	
}

console.log(
	"Result:", Object.values(list).reduce((p, c) => p + c, 0)
)
