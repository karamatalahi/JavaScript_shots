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