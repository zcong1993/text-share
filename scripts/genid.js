const { randomBytes } = require('crypto')

const prefix = process.argv[2]

console.log([prefix, randomBytes(12).toString('hex')].filter(Boolean).join('-'))
