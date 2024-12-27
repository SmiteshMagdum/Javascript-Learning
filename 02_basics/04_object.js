//thsi iss object singelton .

//const twiiterUSer = new Object() // -> singelton object 
const xUSer = {} // -> non singelton object 
xUSer.id = "123abc"
xUSer.name = "sam "
xUSer.isLoggedIN = false
console.log(xUSer); //-> {id:'123abc' , name: 'sam', isLoggedIN:false }

const regularUSer = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "smitesh",
            lastname : "magdum "
        }
    }
}
console.log(regularUSer.fullname.userfullname.firstname);
 // -> {userfullname: {firstname:'smitesh', lastname: 'magdum'}}
 // -> { firstname: 'smitesh', lastname: 'magdum ' }
// -> smitesh 

//combine objects 
const obj1 = { 1: "a", 2:"b"}
const obj2 = { 3: "a", 4:"b"}
const obj4 = { 5: "a", 6:"b"}

const obj3 = Object.assign({}, obj1,obj2,obj4)
const obj3 = {...obj1 , ...obj2,...obj4}
console.log(obj3);
// -> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const user = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 1,
        email:"h@gmail.com"
    },

]

user[1].email
console.log(xUSer);
console.log(Object.keys(xUSer))
console.log(Object.values(xUSer))
console.log(Object.entries(xUSer))

console.log(xUSer.hasOwnProperty('name'))
// ->[ 'id', 'name', 'isLoggedIN' ]
// -> [ '123abc', 'sam ', false ]
// -> [ [ 'id', '123abc' ], [ 'name', 'sam ' ], [ 'isLoggedIN', false ] ]

// -> true 

