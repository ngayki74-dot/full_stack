
//logice & conditionl

//if
let color="red"

if(color=="red"){console.log("stop")}//कारण color चे मूल्य "red" आहे आणि if ची अट खरी (true) होते.output=>stop


//if else

  let a =45          //a चे मूल्य 45 आहे.
  if(a==24){         //if(a == 24) ही अट खरी नाही (false).
    console.log("abcd") ; 
  }else{console.log("conditionl")}  //म्हणून else ब्लॉक चालेल आणि output => conditionl असेल:

//let  else   ladder


//if  else   ladder
var total_bill = 799;              //total_bill = 799
if (total_bill > 1000)              //if(total_bill > 1000) → false (799 > 1000 नाही)
{
    console.log("20 % discount");      //त्यामुळे console मध्ये  discount" print nahi hoga
}
else if (total_bill > 500)         //else if(total_bill > 500) → true (799 > 500 आहे)
{
    console.log("10 % discount");    //त्यामुळे console मध्ये "10 % discount" print होईल.
}
else {                                  //else ब्लॉक execute होणार नाही कारण else if true आहे.
    console.log("No discount");
}


var gender ="female"
var age =21
if(gender == "male"){            //if(gender == "male") → false, म्हणून else ब्लॉक execute होतो.
    if(age>=21){console.log("males : get marry")}
    else{console.log("males : can't get marry")}
}
else{                             //else मध्ये if(age >= 18) → true (21 >= 18)
    if(age >=18){ console.log("female : get merry") }    //Females : get marry     //print होईल
    else{console.log("females :can't get merry")}
}


//There will be times where you want to test multiple conditions. That is where
//the else if the block comes in.
//When the if statement is false , the computer will move onto the else
//if statement. If that is also false , then it will move onto the else block.

//पहिली if condition तपासली जाते

//जर ती true असेल → त्या block मधला कोड चालतो

//आणि बाकी सर्व (else if / else) skip होतात

//जर if false असेल, तर computer else if कडे जातो

//जर ती condition true असेल → त्या block मधला कोड चालतो

//आणि बाकी (उरलेल्या else if / else) skip होतात

//जर सर्व if आणि else if false असतील,
//तेव्हा शेवटचा else block execute होतो




var marks = 75;                     //marks = 75

if (marks >= 90) {                  //पहिला if (>= 90) → false
    console.log("Grade A");
}
else if (marks >= 75) {             //दुसरा else if (>= 75) → true
    console.log("Grade B");         //Grade B     //print होईल
}
else if (marks >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


let ages=60
if(ages==50){console.log("stop")}  //ages == 50 ? → false → काहीही प्रिंट होणार नाही
if(ages==60){console.log("frist")}  //ages == 60 ? → true → "frist" प्रिंट होईल
if(ages==45){console.log("second")}  //ages == 45 ? → false→ काहीही नाही
if(ages==51){console.log("thrid")}  //ages == 51 ? → false→ त्यामुळे याचा else चालेल → "go to the home"
else{console.log ("go to the home")}




