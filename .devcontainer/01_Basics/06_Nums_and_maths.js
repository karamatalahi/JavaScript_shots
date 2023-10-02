const score = 400
console.log(score)
const balance = new Number(500)
console.log(balance);  //this will through output [Number: 500]

// important*

console.log(score.toFixed(3));  //will give 100.000

const number = 37.8916
console.log(number.toPrecision(3))

//Maths.random also Math.floor 

console.log(Math.floor(Math.random()*100)+30);