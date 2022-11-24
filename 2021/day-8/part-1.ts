import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')
	.map((it) => it.split('|')[1].split(' '))

function is1478(str: string): boolean {
	return str.length === 2 || str.length === 4 || str.length === 3 || str.length === 7
}

let count = 0

for (const line of input) {
	for (const item of line) {
		if (is1478(item)) count++
	}
}



console.log(
	"Result:", count
)
