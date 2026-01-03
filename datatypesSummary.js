//primitives call by value
// changes are made in copy
//7 types : string , number , null ,undefined , boolean , symbol , bigint


const score1 = 100 
// const score2:number =324

const scoreValue = 324.2343

const isLoggedIn = false
const outSideTemp= null
let userEmail;

const id = Symbol('2313')

const anotherId = Symbol('2313')

console.log(id === anotherId);//false

const bigNumber = 6546353264325n
console.log(typeof bigNumber);//bigint



//if type of language is defined than static
//javascript is dynamic language
// typescript is static




//non-primitives call by reference
//memory reference is allocated

// array , objects ,function

//array
const fruites = ["apple","banana","watermelon"];

//object
let myObj = {
    name:"disha",
    age:20,
    number:87763238789
}

//function

const myFunction = function(){
    console.log("welcome");
    
}

console.log(typeof id);//symbol

console.log(typeof fruites);//object

console.log(typeof myObj);//object

console.log(typeof myFunction);//function


console.log(typeof bigNumber);//bigint

//type of val
//undefined => undefined
//null => object
//boolean => boolean
//string => string
//object => object
//function => function










