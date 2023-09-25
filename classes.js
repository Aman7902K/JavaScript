class user{
    constructor(username,email){
        this.username = username
        this.email = email
    }
    logme(){
        console.log(`${this.username} is logged`);
    }
    static companyemail(){
        return `atlassain@${this.email}`
    }
}
class admin extends user{
    constructor(role){
        // this.role = role
        super(role,"admin1@gmail.com")
    }
}

const user1 = new user("Aman","ak908@gmail.com")
user1.logme()
const admin1 = new admin("Administrator")
admin1.logme()
