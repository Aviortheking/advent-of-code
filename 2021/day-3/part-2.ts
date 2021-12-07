import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split('\n')


	
function find(mostUsed = true) {
	let list = input
	for (let i = 0; i < list[0].length; i++) {
		const counts = {'0': 0, '1': 0}
		for (const line of list) {
			const bit = line[i] as '0' | '1'
			counts[bit]++
		}
	
		const comparator = counts['0'] > counts['1'] ? '0' : '1' 
		let fn: (item: string) => boolean
		if (mostUsed) {
			fn = (line) => line[i] === comparator
		} else {
			fn = (line) => line[i] !== comparator
		}
		
		list = list.filter(fn)
	
		if (list.length === 1) {
			break
		}
	}

	return list[0]
}
const resORG = find()
console.log(`ORG: ${resORG} or ${parseInt(resORG, 2)}`)
const resCSR = find(false)
console.log(`CSR: ${resCSR} or ${parseInt(resCSR, 2)}`)
console.log(`Result: ${parseInt(resORG, 2) * parseInt(resCSR, 2)}`)
