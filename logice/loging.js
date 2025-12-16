//login

//let username="rahul@12"                             //username चे मूल्य "rahul@12" आहे.
//let password="123456"

//if(username=="sakshi@123"){                    //if(username == "sakshi@123") ही अट खोटी (false) आहे.
  //  if(password==654321){
    //    console.log("login")
    //}
    //else{console.log("wrong password")}
//}
//else{                                                           //म्हणून else भाग चालतो.
  //  (console.log("login"))                                       //output=login
//}

//let username="rahul@123"    //username चे मूल्य "rahul@123" आहे. अट खरी (true)
//let password="123456"

//if(username=="rahul@123"){   //त्यामुळे प्रोग्राम पहिल्या if च्या आत जातो.
  //  if(password==654321){    //दुसरी if अट:जुळत नाही
    //    console.log("login")
    //}
    //else{console.log("wrong password")}  //त्यामुळे else चालेल    =>output  =>wrong password
//}
//else{                                  
  //  (console.log("login"))             
//}

let username="rahul@123"    //username चे मूल्य "rahul@123" आहे. अट खरी (true)
let password="123456"

if(username=="rahul@123"){   //त्यामुळे प्रोग्राम पहिल्या if च्या आत जातो.
    if(password==123456){    //if(password==123456)अट खरी (true)
        console.log("login")//त्यामुळे console.log("login") चालते.
    }
    else{console.log("wrong password")}  
}
else{                                  
    (console.log("login"))             
}


let correctUsername = "rahul@123";
let correctPassword = "123456";

if (username === correctUsername) {             // username check    आधी username तपासला जातो
    if (password === correctPassword1) {         // password check     मग password तपासला जातो
        console.log("Login Successful ✔️");    //बरोबर असेल → "Login Successful"
    } 
    else {
        console.log("Wrong Password ❌");          //चुकीचा असेल → "Wrong Password"
    }
} 
else {
    console.log("Wrong Username ❌");    //चुकीचा असेल तर थेट "Wrong Username" दाखवतो
}
