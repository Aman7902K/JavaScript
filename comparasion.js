// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);
// console.log(null === 0);
// console.log("break");
// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);
// console.log(undefined === 0);
// console.log("break");
// console.log(null > undefined);
// console.log(null >= undefined);
// console.log(null == undefined);
// console.log(null === undefined);
// console.log("break");
// console.log(null < undefined);
// console.log(null <= undefined);


let id = Symbol('324')
let id2 = Symbol('3241')
// console.log(id2)

//heap and stack 

let a = {
    email: "something@gmail.com",
    name: "aman"
}
let b = a;

b.email = "me@gmail.com"
// console.log(a.email);
// console.log(b.email);

let name1 = new String('aman')
// console.log(name1)

// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));
let min = 1
let max = 6
console.log(Math.floor(((Math.random())*(max-min+1))+min))