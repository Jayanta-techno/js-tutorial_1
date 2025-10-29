// Immediately invoked funcion expression
(function database(){
    //named IIFE
    console.log(`DataBase connected`)
})(); // ; used to end the execution context

((name)=>{
    console.log(`Data Base connected to ${name}`)
})('hitesh')