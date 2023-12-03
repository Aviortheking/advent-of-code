// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

const rowLength = text.indexOf('\n')
const rows = text.split('\n')// .slice(1, 3)
const rowCount = rows.length
const matrix = rows.map((it) => it.split(''))
const numbers = '0123456789'

function cellIsGear(rowIdx: number, colIdx: number) {
	return matrix[rowIdx][colIdx] === '*'
}

function numberHasGear(rowIdx: number, colIdxStart: number, colIdxEnd: number) {
	console.log(rowIdx, colIdxStart, colIdxEnd)
	const min = Math.max(0, colIdxStart - 1)
	const max = Math.min(rowLength, colIdxEnd + 2)
	for (let colIdx = min; colIdx < max; colIdx++) {
		if (rowIdx > 0) {
			console.log(cellIsGear(rowIdx - 1, colIdx), rowIdx - 1, colIdx)
			if (cellIsGear(rowIdx - 1, colIdx)) {
				return [rowIdx - 1, colIdx]
			}
		}
		console.log(cellIsGear(rowIdx, colIdx), rowIdx, colIdx)
		if (cellIsGear(rowIdx, colIdx)) {
			return [rowIdx, colIdx]
		}
		if (rowIdx < rowCount - 1) {
			console.log(cellIsGear(rowIdx + 1, colIdx), rowIdx + 1, colIdx)
			if (cellIsGear(rowIdx + 1, colIdx)) {
				return [rowIdx + 1, colIdx]
			}
		}
	}
	return undefined
}

let gears: Record<`${number}-${number}`, Array<number>> = {}

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
			const gearIdx = numberHasGear(rowIdx, startIdx, colIdx - 1)
			if (gearIdx) {
				let gear = gears[gearIdx.join('-') as '1-1']
				if (!gear) {
					gear = []
				}
				gear.push(parseInt(num))
				gears[gearIdx.join('-') as '1-1'] = gear
			}
			num = ''
			startIdx = -1
		}
	}
	if (startIdx > -1) {
		const gearIdx = numberHasGear(rowIdx, startIdx, row.length - 1)
		if (gearIdx) {
			let gear = gears[gearIdx.join('-') as '1-1']
			if (!gear) {
				gear = []
			}
			gear.push(parseInt(num))
			gears[gearIdx.join('-') as '1-1'] = gear
		}
	}
}
console.log(gears, Object.values(gears).filter((it) => it.length === 2).reduce((p, c) => p + c.reduce((pp, cc) => pp * cc, 1), 0))

// too low:
// too high: