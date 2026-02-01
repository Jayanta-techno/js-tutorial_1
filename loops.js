// for loop
Array=[28,109,1,21,0,4531]
for(let index=0;index<Array.length;index++){
    const element=Array[index]
    if(element==1){
        console.log("we get 1")
        continue ;
    }
    console.log(element)
}
let index=0;
// while(index<=3){
//     console.log(`value of index is ${index}`)
//     index++;
// }
do{
    // console.log(`value of index is ${index}`)
    index++;
}while(index<=3)


// for of
//['','','',''] , [{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}
const greetings ="hello world!"
for(const greet of greetings){
    // console.log(`each char is ${greet}`)
}



// maps are objects and stores unique 
const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
// console.log(map)


// for(const mp of map){
//     console.log(mp) //['IN','India'] [''USA','United States of America]...
// }

for (const [key,value] of map){
    // console.log(key,':',value)
}

const myObject={
    game1:'PUBG',
    game2:'coc'
}

// for(const [key,value] of myObject){
//     console.log(key,':',value)
// }  **not iterable in this way**

const myObj={
    js:'javascript',
    cpp:'C++',
    py:'python',
    rb:'rubby'
}


// for (const [key,value] in myObj){
//     console.log(key,':',value)
// }


for(const key in myObj){  // for of will not be used
    // console.log(`${key} is shortcut for ${myObj[key]}`)
}


const programming=['js','rb','py','java','cpp']
for(const lang in programming){
    // console.log(programming[key]) error
    // console.log(key)     error
    // not iterable in this way

    // console.log(typeof key)  undefined
}

for(const lang of programming){
    // console.log(lang)  // will give the elements as it is
}

