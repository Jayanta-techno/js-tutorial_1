
const user={
    username:"jayanta",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to the website...`)
        console.log(this)
    }

}

user.welcomeMessage()
user.username="priti"
user.welcomeMessage()
console.log(this) // {}

function test(){
    // console.log(this)
}
test() // mahabharat print ho jayega


const userinfo=function(){
    let username="Pritu"
    console.log(this.username)
    console.log(this) /// mahabharat print ho jayega****
}
userinfo() // undefined

// const userinfo= ()=>{
//     let username="pritu"
//     console.log(this.username) // undefined
//     console.log(this) //****  {}  ***
// }
// userinfo()  // for this arrow function also it will print undefined


const addition=(num1,num2)=>{
    return num1+num2
}
console.log(addition(5,7))

// alternate way
const Addition=(num1,num2)=>(num1+num2) // direct paranthesis does not require return keyword

console.log(Addition(10,3))