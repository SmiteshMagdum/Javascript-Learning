//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//********************************************* */
// stack (premetive ), heap (non premetive )
let myYotubeName = "smitesh.com"
let anotherName = "chaiaurcode"

console.log(myYotubeName);
console.log(anotherName);

let userone  = {
    email = "smitesh@gmail.com"
    upi :"user@bl"

}
    let userTwo = userone

    userTwo.email ="magdum@gmail.com"


    console.log(userone.email);
    console.log(userTwo.email);
    


