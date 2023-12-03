// note: this runs using bun!
const file = Bun.file('./input.txt')
const text = await file.text()
const res = text.split('\n').filter((it) => !!it).map((it) => {
	const nums = it.replace(/[a-z]/g, '')
	const first = nums[0]
	const last = nums[nums.length - 1]
	return parseInt(first + last)
}).reduce((p, c) => p + c, 0)
console.log(res)
