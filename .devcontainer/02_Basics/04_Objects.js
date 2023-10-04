const shadiUser = new Object();  //only difference between two is this is singleton object
const shadiUser2 = {}; //This is non singleton object
// console.log(shadiUser);
// console.log(shadiUser2);

// const regularUser = {
//     email:'name@gmail.com',
//     fullName:{
//         fName:'king',
//         lName:'op'
//     }
// }

// console.log(regularUser.fullName.fName);

// //Merging two objects:------

// const obj1 = {1:'a',2:'b'}
// const obj2 = {3:'c',4:'d'}
// const obj3 = Object.assign({},obj1,obj2)  // *important
// console.log(obj3);

// // another method
// const obje4 = {...obj1,...obj2}
// console.log(obje4);

// const tinderUser = {
//     name:'king',
//     email:'king@google.com',
//     id:1,
//     location:'jammu',
//     isLoggedIn:true
// }


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));  //checking for the availability of the property
const course = {
    courseName:'Web development',
    price:999,
    courseInstructor:'Hitesh Choudhary'
}

//object destructuring:

const {courseInstructor}= course;
console.log(courseInstructor);