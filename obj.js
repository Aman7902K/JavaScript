let sym = Symbol("key1")


let obj1 = {
    name : "Aman",
    email : "sompaal@gmail.com",
    [sym] : "something", // syntax for using symbol in an object if brackets not used it will simply return a string
    "city name" : "karnal"
}
let obj5 = {
    name : "Aman",
    email : "sompaal@gmail.com",
    "city name" : "karnal"
}
// console.log(obj.name);
// console.log(obj["city name"]);

// console.log(obj)

let obj2 = {
    1: "a",
    2: "b"
}
let obj3 = {
    3: "c",
    4: "d"
}

// let obj4 = Object.assign({},obj1,obj2,obj3)
let obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));



// object destructuring
const {name : nm} = obj5
console.log(nm);