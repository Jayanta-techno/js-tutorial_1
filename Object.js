// singleton
// object.create

//object literals

const mysym=Symbol("iouyr5ty");

const JsUser={
    name:"jayanta",
    "fullname":"Jayanta Garai",
    [mysym]:"passkey",
    age:19,
    location:"Allahabad",
    email:"jayantahistory003@gmail.com",
    isLoggedin:false,
    lastlogindays:["Wednesday","Thursday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
// we can't get fullname by simply '.' 
console.log(JsUser["fullname"])
// we can't also access symbols without []
console.log(JsUser.mysym) //passkey
console.log(typeof JsUser.mysym) // string
console.log(JsUser[mysym]) // undefined
console.log(JsUser["mysym"]) // passkey

// to access as a symbol in the object jsuser
// mysym should be defined like this [mysym]

console.log(JsUser.mysym) //
console.log(typeof JsUser.mysym) // undefined
console.log(typeof JsUser[mysym]) //string
console.log(JsUser[mysym]) // passkey
console.log(JsUser["mysym"]) // undefined

JsUser.email="jayanta.20244085@mnnit.ac.in"
// console.log(JsUser) // thus we can change the elements in the object

// if we want that no one can change the id
// Object.freeze(JsUser);
// JsUser.name="prasanta garai"
// console.log(JsUser) // no change will be there

JsUser.greetings=function(){
    console.log(`Hello JS user, ${this.name}`)
}
// console.log(JsUser) 
console.log(JsUser.greetings())
