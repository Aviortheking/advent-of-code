import fs from 'fs'

const input = fs.readFileSync(__dirname + '/input.txt').toString()
	.split(',')
	.map((it) => parseInt(it))
	.sort((a, b) => a - b)

function median(values: Array<number>) {
	var half = Math.floor(values.length / 2)
	
	return values[half];
}

function average(values: Array<number>) {
	const total = values.reduce((p, c) => p + c, 0)
		
	return Math.floor(total / values.length);
}

function costToLocation(values: Array<number>, value: number) {
	return values.reduce((p, c) => p + Math.abs(c - value), 0)
}



console.log(
	"Result Median:", median(input), costToLocation(input, median(input)),
	"Result Average:", average(input), costToLocation(input, average(input)),
)
