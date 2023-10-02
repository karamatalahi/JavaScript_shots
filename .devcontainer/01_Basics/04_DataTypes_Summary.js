/* # primitive Data-types
7 types:
String
Boolean 
Number
Null
Undefined
Symbol
BigInt


JavaScript is a Dynamically typed Language:

#Refrence Type or Non-Primitive Data-types  
 Arrays
 Objects
 Functions
  
  */

//  some Examples of symbol

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId);



//++++++++++++++++++++++++ Memories and It's types +++++++++++++++++++++++++++++

//Basically memory is of two types 
//Stack Memory:--Used in Primitive DataTypes
//Heap Memory:--:Used in Non-Primitve DataTypes

//Stack Example
let myName = 'Karamat ely'
let mySecondName = myName;
// console.log(mySecondName);
// mySecondName= 'king'
// console.log(myName)
// console.log(mySecondName);

//in stack memory it actually throws a copy of the original so if we make changes in copy it will not reflect in the original 

// Heap Example 

let user = {
    name:'karmat',
    email:'karamat@ybl.com'
}
let user2= user;
user2.email= 'karamat@google.com'
console.log(user.email)

//so this reflects that if we make any changes in user two that will automatically reflect to user1 also because they both are pointing to same memory in the heap 
