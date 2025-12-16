 //termenol opreter

let username=("Rahul@123")
let password=("123456")


username==("Rahul@123")?(console.log("login")):(console.log("wrong username"))//  लॉगिन यशस्वी




username==("Rahul@123")?         //पहिली तपासणी → username बरोबर आहे का?
password==("123456")?            //जर username बरोबर असेल → मग password तपासतो
(console.log("login")):          // password बरोबर असेल → "login" 
(console.log("wrong password")):  //नसेल → "wrong password"
(console.log("wrong username"))  // usernameच चुकीचा असेल → "wrong username" 
    
    