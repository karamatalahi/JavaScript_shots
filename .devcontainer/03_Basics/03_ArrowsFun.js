// const user = {
//     userName:'king',
//     role:'Front End Dev',
//     welcome: function(){
//         console.log(`Hello ${this.userName} you are now ${this.role} in this company`);
//         console.log(this);  //this will refer to the current context as in this current context is above object 
//     }
// }
// console.log(this);//in browser this will through window object here empty curly braces because of node env.
// user.userName='sam'
// user.welcome()

// function chai(){
//     let userName = 'hitesh'
//     console.log(this.userName)  //throw undefined so we get it that this will not be used in function
// }
// chai()


// ----------pure Arrow Function-------------

// implicit return 

const one = (num1,num2) => (num1+num2);

console.log(one(5,6))

// if we use curly braces we need to use return keyword if we use paranthesis we don't need to write return key word