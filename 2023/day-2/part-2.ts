// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

type Colors = 'red' | 'green' | 'blue'

const res = text.split('\n').map((it) => {
	const [gameId, data] = it.split(':', 2)
	const id = gameId.split(' ')[1]
	return {
		id: parseInt(id),
		reveals: data.trim().split(';').map((game) => {
			const res = game
				.trim()
				.split(',')
				.map((balls) => {
					const r = balls
						.trim()
						.split(' ')
					return {cubes: parseInt(r[0]), color: r[1]}
				})
			return {
				red: res.find((it) => it.color === 'red')?.cubes ?? 0,
				green: res.find((it) => it.color === 'green')?.cubes ?? 0,
				blue: res.find((it) => it.color === 'blue')?.cubes ?? 0,
			}
		})
	}
}).map((game) => {
	let lowests: Record<Colors, number> = {
		red: 0,
		blue: 0,
		green: 0
	}
	for (const reveal of game.reveals) {
		for (const color of Object.keys(lowests) as Array<Colors>) {
			const lowest = lowests[color]
			if (reveal[color] > lowest) {
				lowests[color] = reveal[color]
			}
		}
	}
	return lowests
}).reduce((p, c) => p + c.blue * c.green * c.red, 0)

console.log(res)