
// let a = 10;
// if (true) {
//     a=40;
//   const b = 20;
//   var c = 30;
// }
// console.log(a);


// ------------------------Nested Scoping-------------------


// function one(){
//     const name = 'karamat'
//     function two(){
//         const myName = 'khan'
//         console.log(name)
//     }
//     two()
// }
// one()

// one(5)
// function one(num){
//     return num+1
// }

// two(5)  //here is the problem we are storing the function in variable so we can't access variable before initialization:---
const two = function(num){
    return num+3;
}
