// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce(  (acc , curr) => acc+curr , 0 )
// console.log(myTotal);


const shoppingCart = [

    {
        iteamNmae: "js course ",
        price: 2999
    },
    {   
        iteamNmae: "dsa course ",
        price: 999
    },
    {
        iteamNmae: "data science  course ",
        price: 3999
    },
    {
        iteamNmae: "mobile dev course ",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce ( (acc,iteam ) => (iteam.price),0)
console.log(priceToPay);
