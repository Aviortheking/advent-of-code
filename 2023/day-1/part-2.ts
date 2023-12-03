// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

// hack by https://twitter.com/championswimmer/status/1730667285415948767
const letters = {
	'one': 'o1ne',
	'two': 't2wo',
	'three': 'th3ree',
	'four': 'fo4ur',
	'five': 'fi5ve',
	'six': 's6ix',
	'seven': 'se7ven',
	'eight': 'ei8ght',
	'nine': 'ni9ne'
} as const

const res = text.split('\n').filter((it) => !!it).map((it) => {
	let nextNumber = -1
	let nextLetter: keyof typeof letters | null = null
	do {
		nextNumber = -1
		for (const text in letters) {
			const idx = it.indexOf(text)
			if (nextNumber === -1 || (idx > -1 && idx < nextNumber)) {
				nextNumber = idx
				nextLetter = text as 'one'
			}
		}
		if (nextNumber > -1 && nextLetter) {
			it = it.replace(nextLetter, letters[nextLetter])
		}
	} while (nextNumber > -1)
	
	const nums = it.replace(/[a-z]/g, '')
	const first = nums[0]
	const last = nums[nums.length - 1]
	return parseInt(first + last)
}).reduce((p, c) => p + c, 0)
console.log(res)

// too low:
// too high: 53896