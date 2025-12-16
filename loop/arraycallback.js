//array & callback
function greet(a,b){                       //a → value (string)//a → value (string)
    console.log(a);                   //"hello" → a मध्ये जातं
    b();                               //rahul function → b मध्ये जातं
}                 
function rahul(){                       //rahul function run होतं
    console.log("Rahul,how are you")
 }
greet("hello",rahul)                   //output = hello Rahul, how are you


//dusara tarika  //or//
function nitin(n,m){
    console.log(n);
    m();
}
nitin("hello",function(){console.log("good bye")})