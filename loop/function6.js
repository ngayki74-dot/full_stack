//perameter function
function fullname(x,y,z){
    console.log("My name is ",x);      //output =My name is  x            //(x,) are parameters
    console.log("My surname is ",y);   //output =My surname is  y           //(y,) are parameters
    console.log("My city is ",z);      //output =My city is  z                   //(z,) are parameters
}
fullname("Aman","Sharma","Pune");      //function call with arguments         //arguments are the actual values passed to the function
//output =My name is  Aman                                     //output =My surname is  Sharma
//output =My surname is  Sharma                                 //output =My city is  Pune
//output =My city is  Pune                                 //output =My city is  Pune
fullname("Rahul","Verma","Mumbai");    //function call with arguments
//output =My name is  Rahul
//output =My surname is  Verma
//output =My city is  Mumbai
//perameter function end



function concat(m,n){
    console.log("Fullname is ",m+" "+n);   //output=Fullname is  m n
}
concat("harsh","jadhav")                   //function call with arguments
//output=Fullname is  harsh jadhav
concat("sachin","tendulkar")               //function call with arguments
//output=Fullname is  sachin tendulkar
//function to concatenate first name and last name end