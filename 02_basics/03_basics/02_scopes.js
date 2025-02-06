 //var c = 300
let a =300               // wriiten out of this is a global scope , the value written is global is available in block scope
if (true) {             // written  in {} is block scope  , the value written  in block scope should not go outside 
let a = 10 
const b =20
console.log("inner:",a);
}


console.log(a);
//console.log(b);
//console.log(c);

// the child function can access main function but the main function cant access chaild function 
function one (){
     const userName="smitesh"


     function two (){

          const website = "youtube"
         //console.log(userName);
          
          

     }

    // console.log(website);

     two()
     
}
one()


if (true){
     const username = "smitesh"
     if(username === "smitesh"){
          const website = "youtube"
          //console.log(username + website);

          
     }
    // console.log(website);
     
}
//console.log(username);


//+++++++++++++++++++++++intresting +++++++++++

console.log(addOne (5));

function addOne(num){
   return num +1
}


const addTwo = function (num){
     return num +2
}
console.log(addTwo (5))

