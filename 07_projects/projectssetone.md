# projects related to dom 

## ptojrct link
[click here ](https://stackblitz.com/edit/dom-project-chaiaurcode-xgddung2?file=index.html)

# solution code 

# project 1
```javascript
console.log('smitesh')
const button  = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
  console.log(e)
  console.log(e.target)
  if(e.target.id === 'grey'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'white'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'blue'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'purple'){
    body.style.backgroundColor = e.target.id
  }
  if(e.target.id === 'yellow'){
    body.style.backgroundColor = e.target.id
  }
  
  })
});

```

## project 2 solution 

```javascript 
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
 ## project 3 solution 
 ```javascript
const clock = document.getElementById('clock');
let date = new Date();

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleDateString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

 ```
 ## project 5 solution 
 ```Javascript
 const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```
 ## project 6 solution
 ```Javascript
 //generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```



 