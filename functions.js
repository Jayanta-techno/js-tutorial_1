// function saymyname(){
//     console.log("jayanta")
//     console.log("Garai")

// }
// saymyname()

function Summation(number1,number2){
    console.log(number1+number2)
}
const result=Summation(5,5)
console.log(result)  // undefined

function summation(number1,number2){
    return number1+number2
}
const Result=summation(5,5)
console.log(Result)

function loginUsermessage(username){
    if(!username){
        console.log("Please enter username.")
        return 
    }
    return `${username} just logged in.`
}
// loginUsermessage("jayanta") // nothing will be printed
console.log(loginUsermessage())

//  we can set by default arguments like
//   function loginUsermessage(username="Priti")