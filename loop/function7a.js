//funcetion 1 pesha jasat function ektrra karaycha asel tr
//function without parameters
//return  vs console.log


function superman (a,b){
    return a+b;          //return statement returns the sum of a and b to the caller
}
function batman (x){
    return x**2;         //return statement returns the product of x and 2 to the caller
}
function shaktiman (y){
    return y-50;         //return statement returns the difference of y and 50 to the caller
}

let x=superman(40,50);         //function call  to 'x'  //output=90
console.log(x);                   
let y=batman(90);            //function call to  'y'   //output=8100
console.log(y)
let z =shaktiman(y)
console.log("villion got",z)       //function call ta 'z' //output= villion got 8050

