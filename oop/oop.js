const user = {
    username: "manish",
    loginCount: 12,

    getUsesrDetail: function(username, loginCount){
     console.log(this.username);
     console.log(this.loginCount);
    }
}

 
// console.log(this);
console.log(user.getUsesrDetail());