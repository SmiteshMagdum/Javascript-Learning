// singleton 

//object literals 
//Object.create => singelton  


//this is object literals 
const mySym = Symbol("Key1")



const Jsuser = {
    name: "smitesh",
    "full name ": "smitesh magdum ",
    [mySym]: "myKey1",
    age : 18 ,
    location:"mumbai",
    email: "smitesh@gmail.com ",
    isLoggedIn: false,
    lastLoginDays: ["monday ", "staurday "]

}
console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name "]);
console.log(Jsuser[mySym]);
// -> smitesh@gmail.com
// -> smitesh@gmail.com
// -> smitesh  magdum 
// -> myKey1 

Jsuser.email = "smitesh@chatgpt.com "
<<<<<<< HEAD
//Object.freeze(Jsuser)

Object.freeze(Jsuser)
Jsuser.email = "smitesh@infosys.com"
console.log(Jsuser);
// -> after frezze value doesnot change 


Jsuser.greeting = function (){
    console.log("hello JS user ");
}
Jsuser.greetingTwo = function (){
    console.log(`hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
// -> hello JS user 
// -> hello JS user , smitesh

