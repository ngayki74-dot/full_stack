//return  vs console.log

function print(){
    return "BATMAN";        //return statement returns the value "BATMAN" to the caller
}
let value=print();          //function call, the returned value is assigned to the variable 'value'
console.log(value);         //output: BATMAN, the value stored in 'value' is printed to the console
//here, the function 'print' returns a value, which is then printed using console.log outside the function
//return vs console.log end
//or

function prints(){
    console.log("BATMAN")        //output=BATMAN
}
prints();                       //function call//output=BATMAN
//here, the function 'prints' directly prints "BATMAN" to the console using console.log inside the function
//return vs console.log end  
//or

function addition(a,b){
    return a+b;                 //return statement returns the sum of a and b to the caller
}
let sum=addition(10,20);      //function call with arguments, the returned sum is assigned to the variable 'sum'
console.log(sum);             //output: 30, the value stored in 'sum' is printed to the console
//here, the function 'addition' returns the sum of its parameters, which is then printed using console.log outside the function
//return vs console.log end
//or

function add(a,b){
    console.log(a+b);          //output=30
}
add(10,20);                    //function call with arguments//output=30
//here, the function 'add' directly prints the sum of its parameters to the console using console.log inside the function
//return vs console.log end
//or
function multiply(a,b){
    return a*b;                //return statement returns the product of a and b to the caller
}
let product=multiply(5,6);    //function call with arguments, the returned product is assigned to the variable 'product'
console.log(product);         //output: 30, the value stored in 'product' is printed to the console
//here, the function 'multiply' returns the product of its parameters, which is then printed using console.log outside the function
//return vs console.log end
//or
function multi(a,b){
    console.log(a*b);          //output=30
}
multi(5,6);                    //function call with arguments//output=30
//here, the function 'multi' directly prints the product of its parameters to the console using console.log inside the function
//return vs console.log end
//or
function divide(a,b){
    return a/b;                //return statement returns the quotient of a and b to the caller
}
let quotient=divide(60,2);    //function call with arguments, the returned quotient is assigned to the variable 'quotient'
console.log(quotient);        //output: 30, the value stored in 'quotient' is printed to the console
//here, the function 'divide' returns the quotient of its parameters, which is then printed using console.log outside the function
//return vs console.log end
//or
function div(a,b){
    console.log(a/b);          //output=30
}
div(60,2);                    //function call with arguments//output=30
//here, the function 'div' directly prints the quotient of its parameters to the console using console.log inside the function
//return vs console.log end
//or
function difference(a,b){
    return a-b;                //return statement returns the difference of a and b to the caller
}
let diff=difference(50,20);   //function call with arguments, the returned difference is assigned to the variable 'diff'
console.log(diff);            //output: 30, the value stored in 'diff' is printed to the console
//here, the function 'difference' returns the difference of its parameters, which is then printed using console.log outside the function
//return vs console.log end
//or
function diff(a,b){
    console.log(a-b);          //output=30
}
diff(50,20);                  //function call with arguments//output=30
//here, the function 'diff' directly prints the difference of its parameters to the console using console.log inside the function
//return vs console.log end
//or
function remainder(a,b){
    return a%b;                //return statement returns the remainder of a divided by b to the caller
}
let rem=remainder(95,65);     //function call with arguments, the returned remainder is assigned to the variable 'rem'
console.log(rem);
//output: 30, the value stored in 'rem' is printed to the console
//here, the function 'remainder' returns the remainder of its parameters, which is then printed using console.log outside the function
//return vs console.log end
//or
function rem(a,b){
    console.log(a%b);          //output=30
}
rem(95,65);                  //function call with arguments//output=30
//here, the function 'rem' directly prints the remainder of its parameters to the console using console.log inside the function
//return vs console.log end
//or
function square(a){
    return a*a;                //return statement returns the square of a to the caller
}
let sq=square(5);             //function call with argument, the returned square is assigned to the variable 'sq'
console.log(sq);              //output: 25, the value stored in 'sq' is printed to the console
//here, the function 'square' returns the square of its parameter, which is then printed using console.log outside the function
//return vs console.log end
//or
function sq(a){
    console.log(a*a);          //output=25
}
sq(5);                        //function call with argument//output=25
//here, the function 'sq' directly prints the square of its parameter to the console using console.log inside the function
//return vs console.log end

//perameter function