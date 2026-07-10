//comparision operators                             ==,===,!=,!==,>,<,>=,<=
let m = 10;
let n = "10";
console.log(m == n); // Equal to //output : true //(==)loose equality checks value only, not type (फक्त value तपासते)
console.log(m === n);// Strict Equal to //output : false //(===)  strict equality checks value and type (दोन्ही तपासते)
console.log(m != n); //data type=falus //(!=)  loose inequality checks value only, not type (फक्त value तपासते)
console.log(m !== n); // Strict Not Equal to  //output : true  //(!==) strict inequality checks value and type (दोन्ही तपासते)
console.log(m > 5);   // Greater than          //output : true //(m > 5) म्हणजे m ची value 5 पेक्षा जास्त आहे का ते तपासते
console.log(m < 5);   // Less than             //output : false //(m < 5) म्हणजे m ची value 5 पेक्षा कमी आहे का ते तपासते
console.log(m >= 10); // Greater than or Equal to //output : true//(m >= 10) म्हणजे m ची value 10 पेक्षा जास्त किंवा बरोबर आहे का ते तपासते
console.log(m <= 10); // Less than or Equal to    //output : true //(m <= 10) म्हणजे m ची value 10 पेक्षा कमी किंवा बरोबर आहे का ते तपासते
console.log( m > n);  // Greater than          //output : false //(m > n) म्हणजे m ची value n पेक्षा जास्त आहे का ते तपासते
console.log( m < n);  // Less than             //output : false //(m < n) म्हणजे m ची value n पेक्षा कमी आहे का ते तपासते
console.log( m >= n); // Greater than or Equal to //output : true //(m >= n) म्हणजे m ची value n पेक्षा जास्त किंवा बरोबर आहे का ते तपासते
console.log( m <= n); // Less than or Equal to    //output : true //(m <= n) म्हणजे m ची value n पेक्षा कमी किंवा बरोबर आहे का ते तपासते


//logical && || !
let x=5
console.log(x)
let y =8
console.log(y)
let z =5
console.log(z)
let e ="5"
console.log(e)
let a =x>y              //output=false // x (5) y (8) पेक्षा मोठे नाही, त्यामुळे result false आहे.
console.log(a)
let b = z==e          //output = true   // मध्ये type convert होते → number 5 == string "5" → true
console.log(b)
console.log(a&&b)   //दोन्ही Boolean conditions true असतील तरच परिणाम true मिळतो.
                   //हा सुद्धा short-circuit operator आहे — पहिली condition false असेल तर दुसरी condition तपासली जात नाही 
                    //a && b = false && true = false//म्हणजे दोन्ही अटी खऱ्या न सल्यामुळे परिणाम false.
                      //[a && b = true && true = true//म्हणजे दोन्ही अटी खऱ्या असल्यामुळे परिणाम true.]
                      //दोन्ही values true असतील तरच result true  //अन्यथा false
console.log(a||b)     //output true //(||)दोन Boolean conditions पैकी किमान एक true असेल तर परिणाम true मिळतो.
                    //  a                    //b             // a&&b                           //a||b
                   //true                  //true          //true                            //true
                   //true                 //false         //false                           //true
                   //false               //true          //false                           //true
                   //fales              //false         //false                           //false
                   //AND (&&) → दोन्ही खरे तरच true          OR            (||) → एक जरी खरे तरी true


                   //! not
                   let r;           //true    //let r; → variable घोषित केला पण value दिली नाही
                   console.log(!r)
                   let i=45;      //false    //let i; → variable घोषित केला पण value दिली ahe
                   console.log(!i)           // (!i )→ NOT truthy → false             //(i) → truthy
                   //✅ Falsy Values (फॉल्सी व्हॅल्यूज)

                  //JavaScript मध्ये खालील 7 values फॉल्सी मानल्या जातात:

                   //false

                    //0

                    //-0

                 //0n (BigInt zero)

                   //"" (empty string)

                    //null

                     //undefined

                   //NaN

                 //👉 या values Boolean मध्ये convert केल्या तर false मिळते.
                 // console.log(Boolean(0));       // false
                 //console.log(Boolean(""));      // false
                //console.log(Boolean(undefined)); // false
                //✅ Truthy Values (ट्रुथी व्हॅल्यूज)

//वरील 7 फॉल्सी values वगळता बाकी सर्व values Truthy असतात.

//उदा.:

//true

//कोणतीही non-zero number (उदा. 45, -5, 3.14)

//"hello" (non-empty string)

//[] (empty array)

//{} (empty object)

//function(){} (functions)

//"0", "false" (string असल्यामुळे truthy)

//Infinity, -Infinity

//उदा.:

//console.log(Boolean(45));     // true
//console.log(Boolean("hi"));   // true
//console.log(Boolean([]));     // true
//console.log(Boolean({}));     // true

//// ======================================
// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
// ======================================

let m = 10;
let n = "10";

console.log(m == n);     // true
// == (Loose Equality)
// फक्त value compare करते, data type ignore करते.

console.log(m === n);    // false
// === (Strict Equality)
// Value आणि Data Type दोन्ही compare करते.

console.log(m != n);     // false
// != (Loose Inequality)
// Value सारखी असल्यामुळे false.

console.log(m !== n);    // true
// !== (Strict Inequality)
// Value सारखी आहे पण data type वेगळा आहे.

console.log(m > 5);      // true
console.log(m < 5);      // false
console.log(m >= 10);    // true
console.log(m <= 10);    // true

console.log(m > n);      // false
// "10" Number मध्ये convert होते.

console.log(m < n);      // false

console.log(m >= n);     // true

console.log(m <= n);     // true


//// ======================================
// Logical Operators
// &&   ||   !
// ======================================

let x = 5;
let y = 8;
let z = 5;
let e = "5";

console.log(x);   // 5
console.log(y);   // 8
console.log(z);   // 5
console.log(e);   // "5"

// AND (&&)

let a = x > y;
console.log(a);   // false

let b = z == e;
console.log(b);   // true

console.log(a && b);   // false
// दोन्ही true असतील तरच true.

// OR (||)

console.log(a || b);   // true
// एक जरी true असेल तर true.

// NOT (!)

console.log(!a);       // true
console.log(!b);       // false