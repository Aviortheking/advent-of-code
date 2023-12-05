// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()

const content: Record<string, Array<[number, number, number]>> = {}
const cats = text.split('\n\n')

const seedsTxt = cats.shift()
const seeds = seedsTxt!.slice(seedsTxt!.indexOf(':') + 1).trim().split(' ').map((it) => parseInt(it))

for (const cat of cats) {
	const lines = cat.split('\n')
	const nameLine = lines.shift()
	const name = nameLine!.slice(0, nameLine!.indexOf(' '))

	content[name] = []
	for (const entry of lines) {
		content[name].push(entry.split(' ').map((it) => parseInt(it)) as any)
	}
}

function getLocation(seed: number): number {
	console.log('-------')
	let converterName: string | null = 'seed'
	while (converterName !== null) {
		console.log(converterName, seed)
		const convertersKey = Object.keys(content).find((it) => it.startsWith(converterName as string))
		converterName = null
		const converters = content[convertersKey as string]
		for (const converter of converters) {
			if (seed < converter[1] || seed > (converter[1] + converter[2])) {
				continue
			}
			seed = converter[0] + (seed - converter[1])
			converterName = convertersKey!.slice(convertersKey!.lastIndexOf('-') + 1)
			break
		}
		if (converterName === null) {
			converterName = convertersKey!.slice(convertersKey!.lastIndexOf('-') + 1)
		}
		if (converterName === 'location') {
			return seed
		}
	}
	throw new Error('should not output here')
}

console.log(Math.min(...seeds.map((it) => getLocation(it))))