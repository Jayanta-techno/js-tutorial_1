const score=100
console.log(score)
const newnum=new Number(200) //make it object
console.log(newnum)
console.log(typeof score)
console.log(typeof newnum)
console.log(newnum.toString().length) // length of number 
console.log(newnum.toFixed(2)) // decimal upto 2 digits

const n=123.832
let N=n.toPrecision(3)
console.log(n)
console.log(N)
console.log(typeof n) // Number
console.log(typeof N) // it's a string

// Maths //
console.log(Math)
console.log(Math.abs(-34))
console.log(Math.round(4.6))
console.log(Math.ceil(6.2))
console.log(Math.floor(6.2))

// Random values in range (0-1)
console.log(Math.random())

// finding random value in range of any two numbers
const min =10
const max=200
console.log(Math.floor(Math.random()*(max-min+1))+min) 