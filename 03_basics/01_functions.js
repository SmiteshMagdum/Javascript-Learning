
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