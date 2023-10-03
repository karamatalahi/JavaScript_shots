const marvelHeros = ['thor','ironMan','spiderman'];
const dcHeros = ['superMan','flash','batMan'];
// marvelHeros.push(dcHeros)
marvelHeros.concat(dcHeros);
console.log(marvelHeros.concat(dcHeros));  //bothArrays won't merge dc will come inside marvel

// another method using spread operators
const newArr2 = [...marvelHeros,...dcHeros]
console.log(newArr2);

//another method of array

const array = [1,2,3,4,[5,6],7,[8,9,[10,11],12],13]  //will provide result in a single array:------
console.log(array.flat(Infinity));

// ----converting to array-------
console.log(Array.from("hitesh"))

