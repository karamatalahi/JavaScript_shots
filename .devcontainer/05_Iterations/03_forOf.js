// for off
// const arr = ['karamat','umar','irfan']
// for (const i of arr) {
//     console.log(i)  //dont forget to use i for printing not arr
// }

//Maps:-----


// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('FR', 'France');
// for(let [value,key] of map){
//     console.log(key)
// }


// const myObj = {
//     name:'king',
//     email:'king@123..',
//     role:'frontEnd Dev',
//     age:'22'
// }

// for (const [key,value] of myObj) {
//     console.log(value); // so we get it that object is not iterable
// }


const myObj = {
name:'king',
email:'king@gmail.com',
role:'frontendDev',
id:3
}
// using loop on objects so we use for in loop for objects 

// printing keys and values of an object 

// for(let key in myObj){
//     console.log(`${key}:- ${myObj[key]}`)
// }

// using for in loop in arrays 

// let arr = [1,2,3,5];

// for(let i in arr){
//     console.log(arr[i])  //using i for of loop directly prints the value at i but in for in we have to use indexing of the array
// }