// function addTwoNumbers(a,b){
    
//         return a+b;
    
// }
// const result = addTwoNumbers(2,3);
// console.log("Result:",result);


// function isLoggedin(username='newUser'){  //default value
//     // if(!username){
//     //     return "please enter username"
//     // }else{
//     // return `${username} just logged in`
//     // }
//     return `${username} just logged in`
// }

// console.log(isLoggedin("king"));
// console.log(isLoggedin());



// function calculateCartPrice(num,num2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(3,2,3,4))

const user = {
    name:'king',
    email:'king@123..',
    password: 1233
}

function dealWithObject(anyuser){
console.log(`username is ${anyuser.name} and email is ${anyuser.email} also password is ${anyuser.password}`)
}
dealWithObject(user)