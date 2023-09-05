let obj5 = {
    name : "Aman",
    email : "sompaal@gmail.com",
    "city name" : "karnal",
    greet : function () {
        console.log(`hello ${this.name}`);
        // console.log(this);
    },
}
obj5.greet()
obj5.name = "Viny"
obj5.greet()
console.log(this);

// function siuuu() {
//     let username = "vini"
//     console.log(this.username);
// }
// siuuu()

// let siu = () => {
//     let username = "vini"
//     console.log(this.usernames)
// }
let siu = (num1,num2) => (num1+num2)

console.log(siu(1,4))
let siuu = (num1,num2) => ({name:"vini"})
console.log(siuu);