const name='Jayanta'
const college='MNNIT'
console.log(`My name is ${name} and currently studying in ${college}`)

//creating as primitive
const string ="i love coding"
const string1=`yet anothr primitive string`
console.log(string1)
const string2=new String("A string object.")

// string object

console.log(string2)

console.log(string2.length)

// character acess
console.log(string2.charAt(6)) // n
console.log(string2[6]) // n

// change in uppercase
console.log(string2.toUpperCase()) // A STRING OBJECT
// change in lowercase
console.log(string2.toLowerCase())

const s1="2+2"
const s2=new String("2+2")
console.log(s1) // 2+2
console.log(s2) // 2+2
console.log(eval(s1)) // 4
console.log(eval(s2)) // 2+2
// string object converted to primitive counterpart
console.log(eval(s2.valueOf())) // 4

// replace method of String
 
const paragraph="I will be a good developer definitely"
console.log(paragraph.replace("good","best"))
