// Primitive Datatype
/*

String,Boolean, Number, null,undefined
Symbol,BigInt

*/
// Referrence (Non primitive)
/*

Array,Objects,Functions

** Javasript is a dynamically typed language as it's variables are determined
at run time not in compile at unlike C++,Java

*/

const Id=Symbol('123')
const anotherid=Symbol('123')
console.log(Id==anotherid)  // False

// Non Primitive dtype
const ARR=['Jayanta',1,'mnnit']
console.log(typeof ARR)
let myobj={
    name:'Jayanta',
    college:'MNNIT',
    age:'19'
}
console.log(typeof myobj)
let myfunc=function(){
    console.log("Hello world")
}
console.log(typeof myfunc)
myfunc() // function is called