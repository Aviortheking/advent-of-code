import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')
	.map((it) => it.split('|')[1].split(' '))

function isOne(str: string): boolean {
	return str.length === 2
}

function isFour(str: string): boolean {
	return str.length === 4
}

function isSeven(str: string): boolean {
	return str.length === 3
}

function isEight(str: string): boolean {
	return str.length === 8
}

function is1478(str: string): boolean {
	return isOne(str) || isEight(str) || isSeven(str) || isFour(str)
}

/**
 * 
 * @param line the line to decipher
 * @returns [top, topleft, topright, middle, bottomleft, bottomright, bottom] containing the letter assigned
 */
function decodeMapping(line: Array<string>): [string, string, string, string, string, string, string] {
	let finalVal: [string, string, string, string, string, string, string] = ['', '', '', '', '', '', '']
	for (const num of line) {
		if (isEight(num)) continue

	}
	return finalVal
}

function decode(line: Array<string>): number {
	let topRight: Array<string> = []
	let bottomRight: Array<string> = []
	
	let finalNum: string = ''

	// detect unique ones

	// detect and add globally
	for (const num of line) {
		if (isEight(num)) finalNum += '8'


	}

	return 0
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
