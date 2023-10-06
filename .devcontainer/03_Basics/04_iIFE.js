//Imidiately Invoked Functions:--(IIFE)

(function chai(){
    console.log('DB` CONNECTED');
}());  //sometimes global scope create some pollution to remove that we have used IIFE. don't forget to use ; at the end because it is important to end IIFE
// chai()

((name)=>{
    console.log(`hello ${name} welcome`);
})('karamat'); // passing arguments