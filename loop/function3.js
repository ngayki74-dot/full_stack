//functoin  declaration
let x=10;                      //global scope
let y=20;
function print(){
    let x=15;
    let a=55;                  //function scope
    console.log(x);           //output=15
    console.log(y);           //output=20
    console.log(a);           //output=55
    console.log(x+y+a);                  //output=90
    console.log(x,y)                //output=15 20
    }
print(x,y);
console.log(x);               //output=10
console.log(y);               //output=20
//console.log(a);             //error:a is not defined
//function declaration end
//function expression


function multi(){
    console.log(5*5);          //output=25
}
multi();                           //function call

let multiply=function(){
    console.log(6*6);          //output=36
}
multiply();                       //function call
//function expression end

//NON -not a number
function multi(a){
    console.log(a*5);          //output=NaN
}
multi(10);                  //output=50
multi();                    //output=NaN
//NON -not a number end

function prints(){
    console.log("BATMAN")        //output=BATMAN
}
prints();                       //function call//output=BATMAN  //1(batman)
prints();                       //function call//output=BATMAN  //2(batman)
prints();                       //function call//output=BATMAN   //3(batman)
prints();                       //function call//output=BATMAN   //4(batman)jitni baar call karoge utni baar print hoga
                           //loop me function call kar sakte hai
for(let i=0;i<=6;i++){             //loop start
    prints();                   //function call inside loop//output=BATMAN 6 times
}
//function without parameters end



//function with parameters
function add(a,b){
    console.log(a+b);          //output=30
}
add(10,20);                    //function call with arguments//output=30
add(5,15);                     //function call with arguments//output=20
//function with parameters end
