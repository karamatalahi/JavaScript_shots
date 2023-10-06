// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);
//     //ctrl + D to select all same name elements:--
// }


//Break and Continue:---------
for (let i = 0; i <=10; i++) {
    if(i==5){
        continue;
    }
    if(i==8){
        console.log(`Detected ${i}`);
        break;
    }
    console.log(i)
    
}