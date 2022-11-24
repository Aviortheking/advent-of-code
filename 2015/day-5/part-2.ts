import fs from 'fs'


// const input = fs.readFileSync(__dirname + '/input.txt').toString()
// 	.split('\n')
const input = ['qjhvhtzxzqqjkmpb', 'xxyxx', 'uurcxstgmygtbstg', 'ieodomkazucvgmuy', 'xxxx']



function isNice(str: string) {
	// console.log("Looking at", str)
	let hasRepeat = false
	for (let i = 2; i < str.length; i++) {
		const currentLetter = str[i];
		const otherLetter = str[i - 2];
		if (currentLetter === otherLetter) {
			hasRepeat = true
			break
		}
	}
	if (!hasRepeat) {
		// console.log(str, 'has no repeat')
		return false
	}

	for (let i = 0; i < str.length; i += 2) {
		const combo = str.substr(i, 2);
		if (str.includes(combo, i + 2)) {
			console.log(combo, str, 'is nice!')
			return true
		}
	}
	// console.log(str, 'has no pairs')

	return false
}

const filteredList = input.filter((it) => isNice(it))


console.log(
	"Result:", filteredList.length
)