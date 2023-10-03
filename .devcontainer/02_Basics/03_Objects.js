//Singleton:------ when we declare as constructor this will make singleton


//Object Literals:-------

const mySym = Symbol('key1');
const jsUser = {
    name:"king",  // name:--key "king":---Value
    'full Name':'karamat ely',    //here comes the issue we can't access this with dot
    age:24,
    [mySym]:'mykey1',
    location:'jammu',
    email:'king@google.com',
    isLoggedIn:false,
    lastLoggedIn:["Monday",'Saturday']
}

//ways to access an object:
// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(typeof(jsUser[mySym]));
// jsUser.email= 'karamat@chatGpt.com';
// Object.freeze(jsUser);
// jsUser.email= 'karamat@youtube.com'
// console.log(jsUser);


// Adding a function to object:-----
jsUser.greeting = function(){
    console.log('hello js user');
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);  //if we are refering to same object we just need to use this rather than (jsUser.name)
}

jsUser.greeting();
jsUser.greetingTwo();
