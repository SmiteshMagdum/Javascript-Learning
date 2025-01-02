// Imediately Invoked Function Expression (IIFE)

//Iife use for global declaration pollution remove 
(function chai(){
    // name IIFE 
    console.log(`DB CONNECTED`);
    
})();

(  ( ) => {
    console.log(`DB CONNECTED ${name}`);
}) (`smitesh`)


