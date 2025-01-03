const userEmail = []
if (userEmail) {
    console.log("got the user email");
    
}else{
    console.log("dont have email ");
    
}
/* falsey value 
false , 0 , -0 , Bigint 0n, "", null, undefined, Nan 

------------------------------**---------------------------

truthy value 
"0", 'false', " ", [], {}, funciton(){},
*/

// if (userEmail.length===0) {
//     console.log("arrray is empty");
    
    
// 
// }



const emptyObj = {}

if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
    
}


// Nullish coalescing Oprator (??): null undefined
let val1;
// val1 = 5 ?? 10   =>5
// val1 = null ?? 10     =>10
// val1 =  undefined ?? 15   => 15
// val1 = null ?? 10 ?? 10    => 10
console.log(val1);




/// Ternary oprtor 

// condition ? true : false 

const iceTEaPrice = 100 
iceTEaPrice <= 80 ? console.log("less then 80"): console.log("more then 80");


