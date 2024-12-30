
// function  sayMyNAme() {
// console.log("s");
// console.log("m");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("h");

    
// }
// sayMyNAme()

// function addTwoNUmber(number1 ,number2){  // the value in () is parameters 
        
//     console.log(number1 + number2 );
    
//     }
function addTwoNUmber(number1 ,number2){  
        
return number1 + number2

    }
const result = addTwoNUmber(5, 8 ) // the value in () is called argument
 
function loginUSerMessage(username){
    if (!username) {
        console.log("plese enter the username");// ->plese enter the username
        return 
    } 
    return ` ${username} just logged in `
}

console.log(loginUSerMessage("smietsh"));
// -> smitesh just logged in 

console.log(loginUSerMessage()); //-> undefined 

function calculateCartPrise(val1,val2,...num1) {  // ... rest oprator
    return num1
}
console.log(calculateCartPrise(200,400,500));
//->[ 200, 400, 500 ]without val1 , val2
//-> [ 500]

const user ={
    username : "smitesh",
    price: 233
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
    
}
handleObject(user)
//-> username is smitesh and price is 233
handleObject(
    {
        username : "sam",
        price: 222
    }
)
const myNewArr = [20,520,844,4555]
function returnSecondvalue(getArray) {
    return getArray[3]
    
}
console.log(returnSecondvalue(myNewArr));
//-> 4555
