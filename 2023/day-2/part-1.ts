// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

const maxs = {
	'red': 12,
	'green': 13,
	'blue': 14,
} as const

const res = text.split('\n').map((it) => {
	const [gameId, data] = it.split(':', 2)
	const id = gameId.split(' ')[1]
	return {
		id: parseInt(id),
		reveals: data.trim().split(';').map((game) => {
			return game
				.trim()
				.split(',')
				.map((balls) => {
					const r = balls
						.trim()
						.split(' ')
					return {cubes: parseInt(r[0]), color: r[1]}
				})
		})
	}
}).filter((game) => {
	return !game.reveals.find((reveal) => {
		for (const color in maxs) {
			const max = maxs[color as 'red']
			if (reveal.find((v) => v.color === color && v.cubes > max)) {
				return true
			}
		}
	})
}).reduce((p, c) => p + c.id, 0)
console.log(res)
