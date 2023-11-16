class Landing{
    //property
    database={
        "sanu":{username:"sanu",password:"12"},
        "arjun":{username:"arjun",password:"123"},
        "alan":{username:"alan",password:"124"},
        "lisa":{username:"lisa",password:"125"},

    }
    //method
saveData(){

    if(this.database){
        localStorage.setItem("database",JSON.stringify(this.database))
    }
}
//get data from local storage  //here namal always user exist annon check cheyunnath first database vechan at alland stpre cheyatha data edukkanam

getData(){
    this.database=JSON.parse(localStorage.getItem("database")) //here database is the key of loal storage
    
}





    register(){
        this.getData()
        let user=id3.value
        let pswd=id5.value
        if(user==""||pswd==""){
            alert("please enter valid input")
        }
        else{
           if( user in this.database){
            alert("user already exist")
            window.location="login.html" 
           }
           else{
            this.database[user]={username:user,password:pswd}
            console.log(this.database)
             alert("successfully registered") 
              this.saveData() // this is the method inside class so we have to use this
             //navigate to login page
              window.location="login.html" 
           }
        }

    }
    //login page
    login(){
        let user1=logu.value
        console.log(user1)
        let pswd2=logp.value
        console.log(pswd2)
        this.getData()
         if(user1 in this.database){
if(this.database[user1].password==pswd2){
    
    //to store username in to local storage
    localStorage.setItem("user",user1)
    alert("login successful")
    //store username in the local storage
    localStorage.setItem("user",user1)
    //navigate
    window.location="home.html"
}
else{
    alert("invalid username or password")
}
        }
else{
    alert("user doent exist")
} 
    }
}
//object
const obj=new Landing()
obj.getData() //page load cheyumbo thane namde database load cheyth vekkan matteth register cheyana time lu ann data ne call cheyane