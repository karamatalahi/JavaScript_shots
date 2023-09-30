let score = "33";
// console.log(typeof(score))  //this will show the type of score is string

// let numberValue = Number(score)  //this will convert to number 
// console.log(typeof(numberValue))  //it will show the type will be number doesn't matte what we eneter

//when we convert 33abc which give NaN 
//and the type will be number
//true is converted to 1 and false to 0

//*******************Operations ***********************************/


let value = 3
let negValue = -value;
console.log(negValue)


// console.log(2**4)  //will give 16 double * is power

let str1 = 'karamat'
let str2 = 'Ely'
// console.log(str1+" "+str2)

// console.log("1"+2);
// console.log("1"+2+2); this will give 122 answer because first is string so the next will be concatinated

// console.log(1+2+"2");  //firstly will add 1 and 2 and then concatinate 2 in that


// Link to study prefix and postfix      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// prefix and post fix
let x = 3;
let y = x++; //first assign and then increment
console.log(`x:${x}, y:${y}`);

let a = 3;
let b = ++a;
console.log(`a:${a} b:${b}`);  //will throuhg 4,4 because first increment and then assign