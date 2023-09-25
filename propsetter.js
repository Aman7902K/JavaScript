const user = {
    serialno: 69,
    name:"Aman",
    present:true
}
console.log(Object.getOwnPropertyDescriptor(user,"serialno"));

Object.defineProperty(user,'serialno',{
    writable: false, 
    enumerable: false
})
user.serialno = 42
// console.log(user.serialno);
console.log(Object.getOwnPropertyDescriptor(user,"serialno"));

for (const [key,value] of Object.entries(user)) {
    console.log(`${key}:${value}`);
}
