# Projects Related to DOM

## Project Link 
[Click here](https://stackblitz.com/)

# Solution Code 
## Project 1
```javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')
button.forEach(function (btn){
  console.log(btn)
  btn.addEventListener('click', function(e){
    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id;
    }
  else if (e.target.id ==='yellow'){
    body.style.backgroundColor = e.target.id
  }
  else if (e.target.id ==='blue'){
    body.style.backgroundColor = e.target.id
  }
  else if (e.target.id ==='purple'){
    body.style.backgroundColor = e.target.id
  }
  else {
    body.style.backgroundColor = 'white'
  }
  })
})
```

## project 2 solution code 

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results =document.querySelector('#results');
  if(height ==='' || weight ===''|| height <0 ||weight < 0 || isNaN(height)|| isNaN(weight)){
    results.innerHTML = 'please enter valid input'
  }
  else{
    results.innerHTML = (weight /((height*height)/10000)).toFixed(2)
  }
})
```

## project 3 solution code 

```javascript

const clock = document.getElementById('clock')


setInterval(function (){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```

## project 6 code 
```javascript
//Generate a random color
const randomColor = function (){
  const hex = "0123456789ABCDEF";
  let color = '#'
  for(let i = 0;i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  console.log(color)
  return color;
}
let intervalId ;
const startChangingColor= function (){
  
  intervalId = setInterval(changeBackgroundColor, 1000)
function changeBackgroundColor(){
  document.body.style.backgroundColor = randomColor();

}
}

const stopChangingColor = function (){
clearInterval(intervalId)
}
document.querySelector("#start").addEventListener('click',startChangingColor)

document.querySelector("#stop").addEventListener('click',stopChangingColor)
```