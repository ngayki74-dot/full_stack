//java script caise chlati hi hai
//1. js file ko pura read karta hai(interpretation)
//2. memory me variable and function ko store karta hai(creation phase/hoisting)
//3. line by line code ko execute karta hai(execution phase)
//write the function to perfrom additinon,difference,multiplication and division of two numbers


function add(){
    let a=20;
    let b=10;
    console.log("Addition:",a+b);          //output=Addition: 30
}
add();                                   //function call          //output=Addition: 30

function difference(){
    let a=20;
    let b=10;
    console.log("Difference:",a-b);       //output=Difference: 10
}
difference();                            //function call          //output=Difference: 10

function multiplication(){
    let a=20;
    let b=10;
    console.log("Multiplication:",a*b);    //output=Multiplication: 200
}
multiplication();                       //function call          //output=Multiplication: 200

function division(){
    let a=20;
    let b=10;
    console.log("Division:",a/b);         //output=Division: 2
}
division();                            //function call          //output=Division: 2
//function to perform addition,difference,multiplication and division of two numbers end