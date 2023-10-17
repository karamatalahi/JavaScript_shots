//Understanding Reduce Method:------------

const arr = [1,2,3,4,5];
const initialValue = 0;
const result = arr.reduce((acc,curr) => acc+curr,initialValue);  //it asks only once the initial value then keep adding acc with curr value 
console.log(result)