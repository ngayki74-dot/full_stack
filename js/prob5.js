//varible => kind of container to store data
var bag=45;             // declaration                //number                      tadata type: number
var box="hello";       // declaration                //string                      tadata type: string
var Active=true;    // declaration                //boolean                     tadata type: boolean

//print the variable value
console.log(bag);
console.log(box);
console.log(Active);

var bag2;                                            //declaration
console.log(bag2);                                   //undefined
bag2=100;                                         //re-assignment               reassing hoto he
console.log(bag2);                                  //100
bag2=bag2;                                        //redecleretion             redecler hoto he
console.log(bag2);                                  //150


//let => kind of container to store data
let a=20;                                       //declaration                   number
console.log(a);                              // 20                  20 valum nahi hoga to undefined print hoga
a=40;                                        //re-assignment               reassing hoto he
console.log(a);                              //40
//let a=60;                                   //redecleretion             redecler nahi hoto he  error aayega



//const => kind of container to store data
const ab=30;                                 //declaration                   number
console.log(ab);                           //30                   30 valum nahi hoga to undefined print hoga
//ab=50;                                     //re-assignment               reassing nahi hoto he error aayega
//const ab=70;                              //redecleretion             redecler nahi hoto he  error aayega

//data types in javascript
//1. primitive data types
   //a. number
   var num1=100;
   console.log(typeof num1);                    //number
    //b. string
    var str1="welcome to javascript";
    console.log(str1);                          //string
    //c. boolean
    var bool1=true;
    console.log( bool1);                    //boolean
    //d. undefined
    var und1;
    console.log( und1);                     //undefined
    //e. null
    var nll1=null;
    console.log( nll1);                       //object
//2. non-primitive data types
   //a. object
   var obj1={name:"john", age:30, city:"New York"};
    console.log(obj1);                         //object
    //b. array
    var arr1=[10, 20, 30, 40, 50];
    console.log(arr1);                         //object
    //c. function
    function func1(){
        return "hello";
    }
    console.log(func1);                       //function
