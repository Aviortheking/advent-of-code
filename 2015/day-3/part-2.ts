import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('') as Array<'<' | '>' | 'v' | '^'>

const poses: Array<`${number}:${number}`> = ['0:0']

let x = 0
let y = 0

let roboX = 0
let roboY = 0

for (let i = 0; i < input.length; i++) {
	const direction = input[i]
	let xChange = 0
	let yChange = 0
	switch (direction) {
		case '>':
			xChange++
			break;
		case '<':
			xChange--
			break;
		case '^':
			yChange--
			break;
		case 'v':
			yChange++
			break;
	}
	let v: `${number}:${number}`
	if (i % 2 === 0) { // santa
		x += xChange
		y += yChange
		v = `${x}:${y}`
	} else { // roboSanta
		roboX += xChange
		roboY += yChange
		v = `${roboX}:${roboY}`
	}
	if (!poses.includes(v)) {
		poses.push(v)
	}
}

console.log(
	"Result:", poses.length
)