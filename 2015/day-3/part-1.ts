import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('') as Array<'<' | '>' | 'v' | '^'>

const poses: Array<`${number}:${number}`> = ['0:0']

let x = 0
let y = 0

for (const direction of input) {
	switch (direction) {
		case '>':
			x++
			break;
		case '<':
			x--
			break;
		case '^':
			y--
			break;
		case 'v':
			y++
			break;
	}
	const v: `${number}:${number}` = `${x}:${y}`
	if (!poses.includes(v)) {
		poses.push(v)
	}
}

console.log(
	"Result:", poses.length
)