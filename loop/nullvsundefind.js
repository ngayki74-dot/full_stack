//null vs undefind
let a;
console.log(a)          //output:undefined  कारण a या variable ला कोणतीही value assign केलेली नाही.
console.log(typeof a)   //output:undefined  कारण a चा type देखील undefined आहे.
a=null;                 //a या variable ला null value assign केली आहे.
console.log(a)          //output:null       कारण आता a च्या value null आहे.
console.log(typeof a)   //output:object     कारण JavaScript मध्ये null चा type object म्हणून दर्शविला जातो, जे एक ज्ञात quirk आहे.
//null म्हणजे "कोणीही मूल्य नाही" किंवा "रिक्त मूल्य". undefined म्हणजे "मूल्य निर्धारित केलेले नाही" किंवा "मूल्य अस्तित्वात नाही".
//undefined ही JavaScript मधील एक primitive value आहे जी दर्शवते की एखाद्या variable ला कोणतीही value assign केलेली नाही. जर तुम्ही एखादा variable declare केला पण त्याला कोणतीही value दिली नाही, तर त्याची default value undefined असेल.
//null ही देखील JavaScript मधील एक primitive value आहे जी दर्शवते की एखाद्या variable मध्ये "कोणीही मूल्य नाही" किंवा "रिक्त मूल्य" आहे. तुम्ही एखाद्या variable ला null explicitly assign करू शकता जे दर्शवते की त्या variable मध्ये कोणतीही value नाही.
//उदाहरणार्थ:
let b;                  //b variable declare केला पण कोणतीही value दिलेली नाही.
console.log(b)          //output:undefined  कारण b ची value undefined आहे.


let product=["laptop","mobile","tablet","data cable","charger","earphone"] 
 //product हे एक array आहे ज्यात  string values आहेत.
 let search="hedephone"   //search हे एक variable आहे ज्यात "mobile" string value आहे.
 let result1=product.indexOf(search)  //indexOf() method वापरून "mobile" या string चा index शोधला आहे.
 console.log(result1)   //output:1    कारण "mobile" हा product array मध्ये index 1 वर आहे.
    let search1="camera"  //search1 हे एक variable आहे ज्यात "camera" string value आहे.
   let result2=product.indexOf(search1) //indexOf() method वापरून "camera" या string चा index शोधला आहे.
    console.log(result2)  //output:-1   कारण "camera" हा product array मध्ये नाही, त्यामुळे indexOf() method -1 return करते.
//indexOf() method जर दिलेली value array मध्ये नसेल तर तो -1 return करतो, जो दर्शवतो की value array मध्ये अस्तित्वात नाही.
//null vs undefind end

//null undefined madhil फरक समजावून सांगण्यासाठी खालील कोड दिला आहे:
let ispresent;          //ispresent variable declare केला पण कोणतीही value दिलेली नाही.
for(let i=0;i<product.length;i++){
    if(product[i]==search){
        ispresent=search;
        break;  //जर product array मध्ये search value सापडली तर ispresent ला true assign केले.
    }else{
        ispresent=null;   //जर product array मध्ये search value सापडली नाही तर ispresent ला null assign केले.
    }
}
if(ispresent===null){
    console.log("product not found")   //output:product not found
}else{
    console.log("product found")       //output:product found
}





//object start
//object   =an object that represents a loop structure in a programming language.object – प्रोग्रॅमिंग भाषेमध्ये लूप स्ट्रक्चर (loop structure) दर्शवणारी एक ऑब्जेक्ट.
//loop.js  =a JavaScript file that contains code related to loop structures.loop.js – लूप स्ट्रक्चरशी संबंधित कोड असलेली JavaScript फाईल.
//object=sentex
//obj={key:"value"
//     key : "value"}
let mark=[80,98,97,89,76]  //mark आणि mark1 हे दोन arrays आहेत—एकात मार्क्स, तर दुसऱ्यात विषयांची नावे.
let mark1=["english", "maths", "science", "hindi", "marathi"]
let result={
    name:"rahul",  //result हे एक object आहे ज्यात विद्यार्थ्याचे नाव आणि त्याचे विषयनिहाय गुण दिले आहेत.
    english:76,
    maths:89,
    science:98,
    hindi:80,
    marathi:97}
console.log(result)  //console.log() वापरून तुम्ही संपूर्ण object आणि काही विशिष्ट property print करत आहात.

console.log("name:",result.name)
console.log("english:",result.english)
console.log("maths:",result.maths) 
//how to access this values       // मूल्ये access करण्याचे दोन प्रकार:
//console.log(detale["key"]) 1st method  bracket notation   (कंस पद्धत)
//console.log(detale.key) 2nd method dot notation         (डॉट पद्धत)
let detale={
    name:"rahul",
    age:20,}
console.log(detale)        //output:{ name: 'rahul', age: 20, city: 'pune' }
console.log(detale["name"])  //bracket notation       output:rahul
console.log(detale.name)     //dot notation         output:rahul
console.log(detale["age"])   //bracket notation       output:20
console.log(detale.age)      //dot notation         output:20

