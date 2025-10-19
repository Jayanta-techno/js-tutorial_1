const User= new Object()
// const user ={}  non singleton object
// User.id="jayanta@2006"
// User.name="Jayanta"
// User.isloggedin=false
// console.log(User)

const regularUser={
    email:"jayantahistory003@gmail.com",
    fullname:{
        userfullname:{
            name:"Jayanta",
            title:"Garai"
        }
    }
}

console.log(regularUser.fullname.userfullname)

// objects merging
obj1={1:"J",2:"a"}
obj2={3:"y",4:"P"}
obj3=Object.assign({},obj1,obj2)
console.log(obj3)
obj4={...obj1,obj2}
console.log(obj4)
// some methods
console.log(Object.keys(regularUser)) // print all keys
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))
console.log(regularUser.hasOwnProperty('email'))

