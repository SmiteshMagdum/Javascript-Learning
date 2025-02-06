const name = "smitesh"
const repoCount = 50

//console.log(name + repoCount  +  "value"); 

// console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

 const gameName = new String('Smitesh-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// //console.log(gameName. toUppercase()); 
 console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherStrig= gameName.slice(-10,4)
console.log(anotherStrig);


const newStringOne = "   smitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://smitesh.com/smitesh%20magdum"

console.log(url.replace('%20', '-'))

console.log(url.includes('smitesh'))

console.log(gameName.split ('-'));

let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);

let str = "JavaScript";
console.log(str.indexOf("Script")); // Output: 4
console.log(str.includes("Java")); // Output: true