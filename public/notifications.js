module.exports={
    logNotification: (login)=>{
        if(login.length > 50){
            console.log("NO");
            return false;
        }
    },
    nameNotification: (name)=>{
        if(name.length > 255){
            console.log("NO");
            return false;
        }
    },
    passNotification: (password)=>{
        if(password.length > 255){
            console.log("NO");
            return false;
        }
    }
}