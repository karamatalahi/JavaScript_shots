//Arrays

// const myArr = [1,2,3,4]  //Arrow always make shallow copies : whose propeties share the same refrence as we make changes in the copied array will reflect to the original---
// const myArr2 = myArr;
// myArr2[2]=5;
// console.log(myArr)

//where as in deep copies properties don't Share the same refrence


//Array Methods:--------------
// const arr = [1,2,3,4,5];
// arr.push(6)
// arr.push(7)
// arr.push(8)
// console.log(arr);
// arr.unshift(0)  //Willl add zero at the first index
// console.log(arr);
// arr.shift()
// console.log(arr);//will remove the arr[0]

// //includes
// console.log(arr.includes(9))
// const newArr = arr.join()
// console.log(newArr);


const myArr = [1,2,3,4,5,6,7,8]
const nArr = myArr.slice(1,4)
console.log(nArr);
const tArr = myArr.splice(0,3)
console.log(tArr);
console.log(myArr);  //Will also cut from original array 
