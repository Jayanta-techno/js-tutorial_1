let myDate=new Date()
console.log(myDate)
console.log(myDate.toString()) 
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) // object
console.log(myDate[10]) // UNDEFINED
let mydate=new Date(2006,4,2)
console.log(mydate.toString())


// Time
let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(Math.floor(mytimestamp/1000)) // seconds

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long",

}))