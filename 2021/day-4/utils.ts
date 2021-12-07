export type Board<T = number> = Array<Array<T>>

export function hasBoardWon(board: Board, values: Array<Number>) {
	const victoryBoard: Board<boolean> = board.map((line) => line.map((value) => values.includes(value)))
	let colsHasFalse = Array.from(Array(victoryBoard.length)).map(() => false)
	for (let lineIndex = 0; lineIndex < victoryBoard.length; lineIndex++) {
		const line = victoryBoard[lineIndex];
		let hasFalse = false
		for (let columnIndex = 0; columnIndex < line.length; columnIndex++) {
			const item = line[columnIndex];
			if (!item) {
				colsHasFalse[columnIndex] = true
				hasFalse = true
			}
		}

		if (!hasFalse) {
			return true
		}
	}
	return colsHasFalse.includes(false)
}

export function parseBoard(board: string): Board {
	const lines = board.split('\n')
	const res: Board = []
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]
		res[i] = line.split(/  ?/g).map((v) => parseInt(v)).filter((it) => !isNaN(it))
	}
	return res
}

export function calculateBoardScore(board: Board, subList: Array<number>) {
	return board.reduce((bp, bc) => {
		return bp + bc.reduce((lp, lc) => subList.includes(lc) ? lp : lp + lc, 0)
	}, 0)
}