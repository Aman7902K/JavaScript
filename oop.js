function userdetails(username,logcount,islogged){
    this.username = username
    this.logcount = logcount
    this.islogged = islogged
    return this
}

const user1 = new userdetails("Aman", 21,true)
const user2 = new userdetails("Aaryan",0,false)
console.log(user1);
console.log(user2);
