let username="skillonit@1000";
let password="123456";
let result=document.getElementById("result");
function submit(){
    let user=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
    if(user===username && pass===password){
        result.innerText="Login Successful";
        result.style.color="green";
    }else if(user!==username && pass!==password){
        result.innerText="Invalid Username and Password";
        result.style.color="red";
    }
}


