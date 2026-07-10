//coditionl statements
//if            if (condition) {// condition true असेल तर हा code चालेल}

if (true){console.log("hello")}  //  condition true he to output milega
if (false){console.log("hello")}  //condition false he to output nahi milega.


if(4>5){console.log("it is greater")}  //  (false)     condition false he output nahi dega
  
if(4<5){console.log("it is greater")}  //  (true)     condition true he output  dega
//if (45) { console.log("Truthy");   // चालेल}

//if (0){console.log("Falsy");    // चालणार नाही}

//varible are cost senstive  नाही. कोणत्याही प्रोग्रामिंग भाषेत variable नाव number ने सुरू होत नाही.
//let 1name = 10;   // ❌ invalid  हे error देईल.
//let name1 = 10;   // ✔️ valid     अक्षराने (a–z, A–Z) सुरू होऊ शकते
//let _name = 20;   // ✔️ valid     _ (underscore) ने सुरू होऊ शकते
//let $value = 30;  // ✔️ valid     $ ने सुरू होऊ शकते (JavaScript मध्ये)


//if else
if("Hello"=="hello"){
    console.log(namskar)}   //JavaScript मध्ये "Hello" == "hello" false असेल कारण H आणि h वेगळे आहेत
                      //"Hello" आणि "hello" समान नाहीत कारण JavaScript मध्ये case-sensitive तुलना होते (H ≠ h).
                     // त्यामुळे if condition false होते.
    else{console.log("good bey")}//म्हणून else ब्लॉक execute होतो आणि console.log("good bey") print होते.


   if("Hello"=="Hello"){
    console.log(namskar)}   //आता "Hello" == "Hello" आहे → true  //म्हणजे if ब्लॉक execute होईल.
     else{console.log("good bey")}//तुम्ही console.log(namskar) वापरलंत,
                  //  पण namskar नावाचा variable defined नाही.त्यामुळे JavaScript ReferenceError देईल:

     
//if  else   ladder
var total_bill = 799;
if(total_bill > 1000)
{
console.log("20 % discount");
}
else if(total_bill > 500)
{
console.log("10 % discount");
}
else
{
console.log("No discount");
}

