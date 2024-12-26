// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]


//another method to declare array 
const myArr2 = new Array(1, 2, 3, 4)

// to acess array value
 console.log(myArr[1]);

/*   Array methods  */


// add a new value in array 
 myArr.push(6)
 console.log(myArr);
 // -> [ 0,1,2,3,4,5,8]


// remove the last value of the array 
myArr.pop()
console.log(myArr); 
// -> [0,1,2,3,4,5,]

// Insert the valuee in the first index box 
 myArr.unshift(9)
console.log(myArr);
// -> [8,0,1,2,3,4,5]


// Remove the value in the fist index box
 myArr.shift()
console.log(myArr);
// -> [0,1,2,3,4,5]

//asking question that 9 is  includes in this array 
// indexof means the value is  in which postion in array 
console.log(myArr.includes(9)); // -> false 
console.log(myArr.indexOf(3)); // -> 3


// . join adds all the element of array into string 
 const newArr = myArr.join()

 console.log(myArr); // -> [0,1,2,3,4,5,]
 console.log( newArr);// -> 012345
console.log(typeof newArr ); // -> string 


 //slice, splice
 
 // slice - return a copy of an section of an array 
console.log("A ", myArr); // -> A [0,1,2,3,4,5,]  [1,2]
const myn1 = myArr.slice(1, 3)

console.log(myn1);  // -> B [0,1,2,3,4,5]
console.log("B ", myArr);

// splice - removes elements from the array 
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // C -> [0,4,5,] [1,2,3]
console.log(myn2);
