// Stack stores primitive dtype
//Heap stores nonprimitive dtype

let mymail="jayanta.20244085@mnnit.ac.in"
let newmail="jayanta@google.com"
console.log(mymail)
console.log(newmail)
newmail="jayanta@graviton.org.in"
console.log(mymail)
console.log(newmail)  // only changes in newmail as it's saved in stack and a copy is made
let bio={
    name:'jayanta',
    institute:'MNNIT'
}
let updated_bio=bio
console.log(bio)
console.log(updated_bio)
updated_bio.institute='MIT'
console.log(bio)
console.log(updated_bio) // due to change in updated_bio main bio also
// changed as they are saved  in heap and having same adress pointed
