import fs from 'fs'

const input = fs.readFileSync(__dirname + '/ex.txt').toString()

const rowLength = input.indexOf('\n')
const rows = input.split('\n')// .slice(1, 3)
const rowCount = rows.length
const matrix = rows.map((it) => it.split('').map((it) => parseInt(it)))

// store the index of the lowest point
let lowests: Array<[number, number]> = []

for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
	const row = matrix[rowIdx];
	for (let colIdx = 0; colIdx < row.length; colIdx++) {
		const top = matrix[rowIdx - 1]?.[colIdx] ?? Infinity
		const previous = row[colIdx - 1] ?? Infinity
		const height = row[colIdx]
		const next = row[colIdx + 1] ?? Infinity
		const bottom = matrix[rowIdx + 1]?.[colIdx] ?? Infinity
		const othersMin = Math.min(top, previous, next, bottom)
		if (othersMin > height) {
			lowests.push([rowIdx, colIdx])
		}
	}
}

console.log(lowests, lowests.map((it) => matrix[it[0]][it[1]] + 1).reduce((p, c) => p + c, 0))
