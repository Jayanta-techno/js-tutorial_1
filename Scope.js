let a=200 //global scope
if(1){
    let a=3
    const b=0 // block scope
    var c=2
    console.log("block scope:",a)
}
console.log("global scope",a) 
// console.log(b)// not defined throw error
console.log(c)  // but this var whhich is defined inside if() still print c

// function one(){
//     const user="jayanta"
//     function two(){
//         const website="youtube"
//         console.log(user)
//     }
//     // console.log(website)
//     two()
// }
// one()
if(true){
    console.log("i love coding")
    const user="jayanta"
    if(user==="jayanta"){
        const web="Toutube"
        console.log(user+web)
    }
    // console.log(web) // error
}
// console.log(user) //error
