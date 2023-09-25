function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.inc = function(){
    this.score++
}
createUser.prototype.print = function(){
    console.log(`Username is ${this.username} and score is ${this.score}`);
}

const a = new createUser("Aman",89)
const b = createUser("Vini",99)

a.inc()
a.print()

const obj = {
    username : "Aman",
    email : "someone@gmail.com"
}
const arr = [32,435,465,23,23]

Array.prototype.sayname = function(){
    console.log("hello my name is Aman");
    console.log(this);
}
arr.sayname()
// obj.sayname()