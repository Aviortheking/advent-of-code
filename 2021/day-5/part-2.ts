import fs from 'fs'

function parseLine(line: string): Array<`${number}:${number}`> {
	const splitted = line.split(' -> ')
	const xy1 = splitted[0].split(',').map((it) => parseInt(it))
	const xy2 = splitted[1].split(',').map((it) => parseInt(it))
	const xMin = Math.min(xy1[0], xy2[0])
	const xMax = Math.max(xy1[0], xy2[0])
	const yMin = Math.min(xy1[1], xy2[1])
	const yMax = Math.max(xy1[1], xy2[1])

	
	// console.log(xy1, xy2)
	// console.log(xMin, xMax, yMin, yMax)

	const isDiagonal = xMin !== xMax && yMin !== yMax
	const res: Array<`${number}:${number}`> = []
	
	if (isDiagonal) {
		const xChange = xy1[0] > xy2[0] ? -1 : 1
		const yChange = xy1[1] > xy2[1] ? -1 : 1
		let x = xy1[0]
		let y = xy1[1]
		for (let i = 0; i <= (xMax - xMin); i++) {
			const tmp = `${x}:${y}` as `${number}:${number}`
			// console.log(line, tmp)
			res.push(tmp)
			x += xChange
			y += yChange
			
		}
	} else {
		for (let x = xMin; x <= xMax; x++) {
			for (let y = yMin; y <= yMax; y++) {
				const tmp = `${x}:${y}` as `${number}:${number}`
				// console.log(line, tmp)
				res.push(tmp)
			}
		}
	}


	return res
}

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')

const cellCount: Record<`${number}:${number}`, number> = {}

for (let i = 0; i < input.length; i++) {
	const line = input[i];
	const vents = parseLine(line)
	for (const vent of vents) {
		if (!(vent in cellCount)) {
			cellCount[vent] = 0
		}
		cellCount[vent]++
	}
}

console.log(cellCount)

console.log(
	"Result:",
	Object.values(cellCount).reduce((p, it) => it >= 2 ? p+1 : p, 0)
)
