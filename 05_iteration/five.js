const  coding  = ["js" , "c++", "c", "css"]

// coding.forEach(  function (iteam) {
// console.log(iteam);


// })
// coding.forEach( (iteam) => {
//     console.log(iteam);
    
// });



// function printMe (iteam){
//     console.log(iteam);
    
// }

// coding.forEach(printMe)

// coding.forEach( (iteam, index, arr)=> {
//     console.log(iteam, index, arr);

// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )