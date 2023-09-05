// const map = new Map()
// map.set('IN','India')
// map.set('CH','China')
// map.set('FR','France')

// for (const [key,value] of map) {
//     // console.log(`${key} :- ${value}`)
// }
// // forof loop doesn't work on object values

// let obj = {
//     name : "Aman",
//     email : "sompaal@gmail.com",
//     city : "karnal"
// }
// for (const key in obj) {
//     // console.log(`${key}:-${obj[key]}`)
// }


// let arr = [32,43,53,52,32]

// // arr.forEach(function (item){
// //     console.log(item);
// // })
// function printarr(item){
//     // console.log(item);
// }

// // arr.forEach(printarr)

// arr.forEach((item,index,arrr)=>{
//     console.log(item,index,arrr)
// })

// arrrr = [
//     {
//         language:'Javascript',
//         Extension:'js'
//     },
//     {
//         language:'Python',
//         Extension:'py'
//     },
//     {
//         language:'C++',
//         Extension:'cpp'
//     },
// ]

// arrrr.forEach((item)=>{
//     console.log(item.language);
// })
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  for (const key in person) {
    console.log(key, person[key]);
  }
  