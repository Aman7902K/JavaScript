class user{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

let Aman = new user("dnfw@gmail.com","fesiae")

console.log(Aman.password);