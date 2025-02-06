const user = {
    username : "smitesh",
    price : 999 ,

    welcomeMessage : function (){
        console.log(`${this.price},is the  price of website  `);
        //console.log(this);
        
    }
}

// user.welcomeMessage()
// //-> 999,is the  price of website 
// user.price = 565
// user.welcomeMessage()
// //->565,is the  price of website  

// console.log(this);


// function chai(){
//     console.log(this);
//     let  username = "smitesh"
//     console.log(this.username);
    
// }

// chai()



const chai = ()=>{
    let username ="smitesh"
    console.log(this);
    

}
//chai()

// basic arrow function 

// const adaTwo =(num1,num2)=>{
//     return num1+ num2
// }

// console.log(adaTwo(3,4));

// implicit return arrow function

//const adaTwo =(num1,num2)=>  num1+ num2
// const adaTwo =(num1,num2)  =>  (num1+ num2)
const adaTwo =(num1,num2)  => ({username:"smitesh"})


console.log(adaTwo(3,4));

const myArr = [1,12,5,6,4,8]
