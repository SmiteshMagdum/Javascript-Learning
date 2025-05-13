  // DO an asynch task
  //DB calls , cryptography , networks
  const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is compltee");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed!!");
});
//2nd
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async Task two");
    resolve();
  }, 2000);
}).then(function () {
  console.log("async 2 resolved");
});
//3rd
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ usernsname: "sam", email: "chai@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
//4th
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "smitesh", passowrd: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The Promise is Either Resolved or rejected"));

  //5th
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", passowrd: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
 try{
  const response = await promiseFive;
  console.log(response);
 }catch(error){
  console.log(error);
  
 }
}
consumePromiseFive();

// async function getAllUser(){
//  try {
//   const response = await fetch('https://api.github.com/users/eyeswiithoutaface')
//   const data = awiat response.json()
//   console.log(data);
//   } catch (error) {
//   console.log(error);
//   }
//   }
  // getAllUser() 

  fetch('https://api.github.com/users/hiteshchoudhary')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    
  }) 
  .catch((error) => console.log(error))
   
  
  