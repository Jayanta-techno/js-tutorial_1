// if 
false==0//true
false=='' // true
0 =='' //true

const userloggedIn =true
const debitCard=true
const loggedInfromGoogle = false
const loggedinfromGmail =true
if(userloggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}
if(loggedInfromGoogle || loggedinfromGmail){
    console.log("User logged in")
} 

// switch(key){
//     case value:

//         break;
//     default:
//         break;
// }
const month="march"
switch(month){
    case "jan":
        console.log("Jayanta")
        break;
    case "feb":
        console.log("feb")
        break;
    case "march":
        console.log("march")
        break;
    case "april":
        console.log("april")
        break;
    default:
        console.log("default case match")
        break;
}

const userEmail=[]
if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email..")
}
// falsy values

// false,0,-0,BigInt 0n," ",null,undefined, NaN
// truthy values
// "0",'false'," ",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
//}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}



// Nullish Coalescing Operator(??) : null undefined
let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15
val1 = null??10??20
console.log(val1)
// Terniary Operator
// condition ? true:false
const iceprice=100
iceprice<=80 ? console.log("less than 80"):console.log("more than 80")
