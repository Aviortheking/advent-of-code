// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

const games = text.split('\n')
	.map((game) => {
		const [prefix, data] = game.split(':', 2)
		const [_, id] = prefix.split(/ +/g, 2)
		const [winningListTxt, chosenListTxt] = data.split('|')
		const winningNumbers = winningListTxt.trim().split(/ +/g).map((it) => parseInt(it.trim()))
		const choseNumbers = chosenListTxt.trim().split(/ +/g).map((it) => parseInt(it.trim()))
		const points = winningNumbers.reduce((p, c) => p + (choseNumbers.includes(c) ? 1 : 0), 0)
		const finalPoints = Math.max(0, 1 << (points - 1))
		return {
			id: parseInt(id),
			winning: winningNumbers,
			chosen: choseNumbers,
			score: points,
			points: finalPoints
		}
	})

function processGame(id: number) {
	const game = games[id - 1]
	let finalScore = 1
	for (let idx = id; idx < id + game.score; idx++) {
		finalScore += processGame(idx + 1)
	}
	return finalScore
}

let result = 0
for (const game of games) {
	console.log('processing game', game.id)
	result += processGame(game.id)
}
console.log(result)