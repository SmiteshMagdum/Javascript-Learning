const marvel_heros = [ "thor", "Ironman", "spiderman "]
const dc_heros = [" superman ", "flash", "batman"] 

//adding value to arr 
 marvel_heros.push(dc_heros)
 console.log(marvel_heros);//-> ['thor','ironman','spiderman',['superman','flash','batman'] ] 
 console.log(marvel_heros[3][1]); //-> flash 

 // concat addtion arrays 
 const allHero = marvel_heros.concat(dc_heros)
 console.log(allHero); /*-> ["thor", "Ironman", "spiderman ",superman ", "flash", "batman] 
 the array has been combined together */

// spread oprator 
 const allNewaHeros = [...marvel_heros, ...dc_heros]
 console.log(allNewaHeros); //->["thor", "Ironman", "spiderman ",superman ", "flash", "batman] 


 const anotherArray = [1,2,3,[4,5,6,],7,[6,7,[4,5,]]]
 // flat array combining all arrays in one array 
 const real_another_array = anotherArray.flat(Infinity)
 console.log(real_another_array);//-> [1,2,3,4,5,6,7,6,7,4,5]


 // is.array chcking the line is array or not
console.log (Array.isArray(["smitesh"])) //-> false


//.from make array any line 
console.log(Array.from("smitesh")); //-> ['s','m','i','t','e','s','h']
console.log(Array.from ({name:"smitesh"}));  //intresting //-> []


// array.of returns a new array from  a set of element 
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // -> [100,200,300]
