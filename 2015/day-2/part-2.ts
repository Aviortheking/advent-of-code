import fs from 'fs'

const input: Array<[number, number, number]> = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')
	.map((it) => it.split('x').map((v) => parseInt(v)) as [number, number, number])

function calc(item: [number, number, number]) {
	const l = item[0]
	const w = item[1]
	const h = item[2]
	const largest = Math.max(l, w, h)
	const tmp = l === largest ? w+h : w === largest ? l+h : l+w
	return tmp + tmp + l*w*h
}

console.log(
	"Result:", input.reduce((p, c) => p + calc(c), 0)
)