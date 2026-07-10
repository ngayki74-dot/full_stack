//     //Declared and assigned

//const age = 45       
//console.log(age)
//age = 50; //Updated          {nahi chalega}
//console.log(age)
   
//const age = 30; //Re-declared and assigned     {nahi chalega}
//console.log(age)

//age = 50; //Assigned     {nahi chalega}

//Let Vs Var Vs Const
//1. var can be re-declared and updated              {volume nahi hoga to chalega display me undefined aayega}
//2. let can be updated but cannot be re-declared    [volume nahi hoga to chalega display me undefined aayega]
//3. const cannot be re-declared or updated          {volume nahi hoga to error aayega}

//hoisting in var, let and const
var a=                                //undefined                                           
console.log(a) 
a=10

//console.log(b)                     //error
let b=20



var s=30
console.log(s)                      //30  {hoisting me declare hoga ushi ko dikhayega }

let e=40
console.log(e)                      //40  {hoisting me declare hoga ushi ko dikhayega }

//console.log(c)                     //error
const c=50

