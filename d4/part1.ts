import fs from 'fs'
import { Board, calculateBoardScore, hasBoardWon, parseBoard } from './utils'

const input = fs.readFileSync(__dirname + '/input.txt').toString()

const items = input.split('\n')[0].split(',').map((it) => parseInt(it))

const boards = input.split('\n\n').map((board, index) => {
	if (index === 0) return undefined
	return parseBoard(board) 
}).filter((it) => it) as Array<Board>

root: for (let i = 1; i <= items.length; i++) {
	const subList = items.slice(0, i)
	for (let j = 0; j < boards.length; j++) {
		const board = boards[j];
		const won = hasBoardWon(board, subList)
		if (won) {
			console.log('Board', j, 'has won!')
			const score = calculateBoardScore(board, subList)
			console.log(board)
			console.log('Score:', score)
			console.log('items:', subList)
			console.log('item:', subList[subList.length - 1])
			console.log('Result:', score * subList[subList.length - 1])
			break root
		}
		
	}
}