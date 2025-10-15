const myarr=[0,1,2,3,4,5,'6',true]
console.log(myarr[2])
let Arr=new Array(2,6,6,0,8,9)
myarr.push(2190)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift('j') // push infront of array
console.log(myarr)
console.log(myarr.includes(10)) // boolean
console.log(myarr.indexOf('6'))
const newarr=myarr.join() // compiles all the elements and turn into one string
console.log(newarr)
console.log(typeof newarr)


// slicing and splicing
console.log("A.",myarr)
const arr1=myarr.slice(0,5)
console.log(arr1)
console.log("B.",myarr)
const arr2=myarr.splice(0,5)
console.log(arr2)
console.log("C.",myarr)
/*
slice crates a new array of the main array within the given range
excluding end point.
but splice() divide the array according to range and create new array
according to range and modifies the main array means the part which is spliced
is absent from the main array
*/

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","batman"]
// marvel_heros.push(dc_heros) // push the whole array as element and update marval_heros array
const my_heros=marvel_heros.concat(dc_heros)  // all elements of each array go into new array only two arrays can be concatinated
console.log(my_heros)  
const heros= [...dc_heros,...marvel_heros] // concat any number of arrays
console.log(heros)


// flat() method
const numarray=[1,2,2,3,[4,6,20],[5,3,3,8,[9,10,23,54]]]
const flattedarray=numarray.flat(Infinity) // ctrete a new array where all elements of numarry is put inside it
console.log(flattedarray) 

// some interesting method
console.log(Array.isArray("Jayanta"))
console.log(Array.from("Jayanta"))
console.log(Array.from({name:"Jayanta",age:19}))  // output []

let n1=23
let n2=347875
let n3="cjvfdnvl"
console.log(Array.of(n1,n2,n3))