//scoping = area where variable is accessible kitne jagah me work karega
//global scope = js file ke kisi bhi jagah se access kar sakte hai
//function scope = function ke andar hi access kar sakte hai  
//block scope = {} ke andar hi access kar sakte hai(let & const) //var ka block scope nahi hota hai


let num=75                           //global scope
function hello(){
    if(5==5){
        let num=45                   //block scope
        console.log(num);            //45
    }
}
hello();                                  //output:45
console.log(num);                         //output:75




//function scope example
function greet(){
    let message="good morning"          //function scope
    console.log(message);
}
greet();                               //output:good morning
//console.log(message);                 //error:message is not defined





//block scope example
if(true){
    let city="pune"                    //block scope
    console.log(city);                 //pune
}
//console.log(city);                   //error:city is not defined



let number=75;                      //global scope
function display(){
    let a=45;                  //function scope
    if(5==a){
        let number=100;          //block scope
        console.log(number);     //100
    }else{
        console.log(a);         //45
        }
    }
display();                         //output:100
console.log(number);              //output:75
//function scope example end


