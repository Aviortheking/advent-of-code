// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

const rowLength = text.indexOf('\n')
const rows = text.split('\n')// .slice(1, 3)
const rowCount = rows.length
const matrix = rows.map((it) => it.split(''))
const numbers = '0123456789'

function cellHasSymbol(rowIdx: number, colIdx: number) {
	const char = matrix[rowIdx][colIdx]
	return char !== '.' && !numbers.includes(char)
}

function numberHasSymbol(rowIdx: number, colIdxStart: number, colIdxEnd: number) {
	console.log(rowIdx, colIdxStart, colIdxEnd)
	const min = Math.max(0, colIdxStart - 1)
	const max = Math.min(rowLength, colIdxEnd + 2)
	for (let colIdx = min; colIdx < max; colIdx++) {
		if (rowIdx > 0) {
			console.log(cellHasSymbol(rowIdx - 1, colIdx), rowIdx - 1, colIdx)
			if (cellHasSymbol(rowIdx - 1, colIdx)) {
				return true
			}
		}
		console.log(cellHasSymbol(rowIdx, colIdx), rowIdx, colIdx)
		if (cellHasSymbol(rowIdx, colIdx)) {
			return true
		}
		if (rowIdx < rowCount - 1) {
			console.log(cellHasSymbol(rowIdx + 1, colIdx), rowIdx + 1, colIdx)
			if (cellHasSymbol(rowIdx + 1, colIdx)) {
				return true
			}
		}
	}
	return false
}

let numbersWithPart: Array<number> = []
for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
	const row = matrix[rowIdx]
	let startIdx = -1
	let num = ''
	for (let colIdx = 0; colIdx < row.length; colIdx++) {
		const col = row[colIdx]
		if (numbers.includes(col) && startIdx === -1) {
			startIdx = colIdx
			num += col
		} else if (numbers.includes(col)) {
			num += col
		} else if (!numbers.includes(col) && startIdx > -1) {
			console.log(num)
			if (numberHasSymbol(rowIdx, startIdx, colIdx - 1)) {
				numbersWithPart.push(parseInt(num))
			}
			startIdx = -1
			num = ''
		}
	}
	if (startIdx > -1) {
		if (numberHasSymbol(rowIdx, startIdx, row.length - 1)) {
			console.log(num)
			numbersWithPart.push(parseInt(num))
		}
	}
}
console.log(numbersWithPart, numbersWithPart.reduce((p, c) => p + c, 0))

// too low: 514045
// too high: 516111