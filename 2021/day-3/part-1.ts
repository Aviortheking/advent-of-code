import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')

const list: Array<{0: number, 1: number}> = []
for (const line of input) {
	const splitted = line.split('')
	for (let i = 0; i < splitted.length; i++) {
		const bit = splitted[i];
		if (!list[i]) {
			list[i] = {0: 0, 1: 0}
		}
		list[i][bit === '0' ? 0 : 1]++
	}
}

let gamma = ''
let epsilon = ''
for (const item of list) {
	gamma = gamma + ((item[0] > item[1]) ? '0' : '1')
	epsilon = epsilon + ((item[0] < item[1]) ? '0' : '1')
}

console.log(list)

console.log(`Result: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`)