const user = {
    username: "Vikram",
    password: "1234",
    getuserName : function(){
        console.log('THIS IS A FUNCTION');
        console.log(
            `username: ${this.username}`);
    }
}
console.log(user.username);
user.getuserName();

const User = (username,isloggedIn,password)=>{
    this.username = username;
    this.isloggedIn = isloggedIn;
    this.password = password;
    return this;
}
const user2 = new User("VIKRAM",true, "12345");
console.log(user2);