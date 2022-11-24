import fs from 'fs'


const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')



function isNice(str: string) {
	if (str.includes('ab') || str.includes('cd') || str.includes('pq') || str.includes('xy')) {
		return false
	}
	let vowelCount = 0
	let lastCharacter = ''
	let hasDoubleChar = false
	for (const char of str.split('')) {
		if (char === lastCharacter) {
			hasDoubleChar = true
		}
		lastCharacter = char

		if ('aeiou'.includes(char)) {
			vowelCount++
		}

		if (vowelCount >= 3 && hasDoubleChar) {
			return true
		}
	}

	return false
}

const filteredList = input.filter((it) => isNice(it))


console.log(
	"Result:", filteredList.length
)