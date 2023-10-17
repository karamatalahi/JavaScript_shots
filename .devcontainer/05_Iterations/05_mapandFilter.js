// // const coding = ['js', 'py' , 'jv', 'c++','c'];
// // const next = coding.forEach((items)=>{
// //     // console.log(items)
// //     return items;  //forEach doesn't return any value :---
// // })

// // console.log(next)


// // Filter Method 

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((nums)=> {
//     return nums>4
// });
// console.log(newNums);

// const books = [
//     {
//       title: "A People's History of the United States",
//       author: "Howard Zinn",
//       genre: "History",
//       publishDate: "1980",
//       edition: "First Edition"
//     },
//     {
//       title: "The Name of the Wind",
//       author: "Patrick Rothfuss",
//       genre: "Fiction",
//       publishDate: "2007",
//       edition: "10th Anniversary Edition"
//     },
//     {
//       title: "Sapiens: A Brief History of Humankind",
//       author: "Yuval Noah Harari",
//       genre: "Non-Fiction",
//       publishDate: "2014",
//       edition: "Revised Edition"
//     },
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       genre: "Fiction",
//       publishDate: "1925",
//       edition: "First Edition"
//     },
//     {
//       title: "The Immortal Life of Henrietta Lacks",
//       author: "Rebecca Skloot",
//       genre: "Non-Fiction",
//       publishDate: "2010",
//       edition: "Paperback Edition"
//     }
//   ];

//   const result = books.filter((bk)=> bk.genre=='Non-Fiction')
//   console.log(result);

// const newNum = [1,2,3,4,5,6,7,8,9,10];
// const ans = newNum.map((num)=>(
//     num+10
//     )
// );
// console.log(ans);

//Chaining 

const newNum = [1,2,3,4,5,6,7,8,9,10];

const result = newNum.
map((num)=> num*10) //this will pass to the next map
.map((num)=>num+1)
.filter((num)=>num>59);
console.log(result);