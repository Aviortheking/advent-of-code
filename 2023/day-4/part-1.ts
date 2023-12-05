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
			id: id,
			winning: winningNumbers,
			chosen: choseNumbers,
			score: points,
			points: finalPoints
		}
	})
console.log(games, games.reduce((p, c) => c.points + p, 0))