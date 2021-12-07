import crypto from 'crypto'


// const input = "pqrstuv"
const input = "yzbqklnj"

let hash = ""
let i = 0
do {
	hash = crypto.createHash('md5').update(input + ++i).digest('hex')
} while (!hash.startsWith('00000'))


console.log(
	"Result:", i, hash
)