//JavaScript Easy Array Questions
//1 Questions                   1. Create an array of 5 numbers and print all the elements using a loop.
 //let arr = [1, 2, 3, 4, 5];     //५ संख्या असलेला array तयार करा आणि loop वापरून सर्व elements print करा.

//for (let i = 0; i <=5; i++) {                 //output=1;2;3;4;5
  //  console.log(arr[i]);
//}

//2 Questions        2. Find the sum of all elements in an array.Array मधील सर्व संख्यांची बेरीज (sum) काढा.
//let sum = 0;                              //1+2+3+4+5+6
//for (let num =1;num<=6;num++)            //output=21
  //   sum += num;
//console.log(sum);
 
// Questions    3. Find the maximum number in an array.Array मधील सर्वात मोठी संख्या शोधा.
let arr = [10, 25, 7, 40, 15];

let max =[0];              // max मध्ये आपण array चा पहिला element ठेवतो.
for (let num of arr) {         //नंतर loop मधून array मधील प्रत्येक element तपासतो.
    if (num > max) {          //एखादी संख्या max पेक्षा मोठी असल्यास max ला त्या संख्येची value देतो.
        max = num;           //शेवटी max मध्ये array मधली सर्वात मोठी संख्या मिळते.
    }
}

console.log(max);           // Output: 40


//4 Questiones   Find the minimum number in an array  4) Array मधील सर्वात लहान संख्या शोधा.
  //arr ही array declare केली आहे: [10, 25, 7, 40,15]
let min = arr[0];          //min सुरुवातीला array चा पहिला element (10) घेतला आहे      
for (let num of arr) {     //for...of loop मधून प्रत्येक num तपासला जातो:
    if (num < min) {       //(if)जर num < min असेल तर min अपडेट केला जातो
        min = num;         //शेवटी console.log(min) मध्ये सर्वात लहान संख्या print केली जाते
    }
}
console.log(min);  // Output: 7

//5)questionse  5. Count how many even numbers are in an array.Array मध्ये किती even (जोड) संख्या आहेत हे मोजा.
//let arr = [10, 25, 7, 40, 15]; // array declare
let countEven = 0;

for (let num of arr) if (num % 2 === 0) countEven++;  //for (let num of arr) → array मधील प्रत्येक संख्या num मध्ये घेते
//if (num % 2 === 0) → तपासते की संख्या जोड आहे का.countEven++ → जर जोड असेल तर counter 1 ने वाढवते
console.log(countEven);                                          // Output: 2 (10 आणि 40)



//6)questionse   Count how many odd numbers are in an array.Array मध्ये किती odd (विजोड) संख्या आहेत हे मोजा.
//let arr = [10, 25, 7, 40, 15]; // array declare
let countodd=0
for(let num of arr) if (num % 2!==0)countodd++;
console.log(countodd)                              // Output: 3 (25 ; 7 आणि 15)



//questionse  7. Create a new array that stores squares of all elements from another array.
//7. दिलेल्या array चे square values असलेला नवीन array तयार करा.

//let arr = [10, 25, 7, 40, 15]; // array declare
let squares = [];              //let squares = []; → एक रिकामी array तयार केली जिथे squares ठेवले जातील
for (let num of arr)           // //for (let num of arr) → array मधील प्रत्येक element घेते
     squares.push(num * num);  //squares.push(num * num); → element चा square करून squares array मध्ये टाकतो
console.log(squares);  //console.log(squares); → शेवटी squares array print करते     [100;625;49;1600;225]