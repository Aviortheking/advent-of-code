import fs from 'fs'

const input: Array<[number, number, number]> = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')
	.map((it) => it.split('x').map((v) => parseInt(v)) as [number, number, number])

function calc(item: [number, number, number]) {
	const l = item[0]
	const w = item[1]
	const h = item[2]
	const smallestSide = Math.min(l*w, w*h, h*l)
	return 2*l*w + 2*w*h + 2*h*l + smallestSide
}

console.log(
	"Result:", input.reduce((p, c) => p + calc(c), 0)
)