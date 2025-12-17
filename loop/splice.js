//splice method
//
//// splice() method array मधील element delete किंवा add करण्यासाठी वापरला जातो

// 1) पहिला parameter:
//    कुठल्या index पासून element delete / add करायचा आहे ते सांगतो

// 2) दुसरा parameter:
//    किती elements delete करायचे आहेत ते सांगतो

// 3) तिसरा (आणि पुढचे) parameter:
//    array मध्ये add करायचे element सांगतो


//array.splice(startIndex, deleteCount);
// startIndex → कुठल्या index पासून delete करायचं
//deleteCount → किती elements delete करायचे

let numbers = [10, 20, 30, 40];

numbers.splice(1, 1); // index 1 पासून 1 element delete

console.log(numbers);     //output=[10,30,40]




let fruits = ["apple", "banana", "mango", "orange"];

fruits.splice(1, 2); // index 1 पासून 2 elements delete

console.log(fruits);           //output=["apple", "orange"]



let numbers1 = [10, 20, 30, 40,50,60,70,80,90,100];
numbers1.splice(4,3)
console.log(numbers1)                             //output=10,20,30,40,80,90,100


//slice method
//.slice(start, end)
//method is use for getting a part of array
//1st parameter starting index 
//2nd parameter ending index
let arr = [1, 2, 3, 4, 5];
let part = arr.slice(1, 4);     ////1 → सुरुवात index → arr[1] = 1;4 → शेवट index (exclusive) → arr[4] = 5(हे समाविष्ट नाही)   
console.log(part)                      //output=[2,3,4]

let arr2 = [10, 20, 30, 40, 50];
let part2 = arr.slice(1, 4);        //1 → सुरुवात index → arr[1] = 20;4 → शेवट index (exclusive) → arr[4] = 50 (हे समाविष्ट नाही)
console.log(part2);                         // [20, 30, 40]



//sort methid


let arr3 = [5, 2, 8, 1, 4];

// बरोबर sort function
arr3.sort((a, b)=>a-b);
console.log(arr3);                            //output= [1, 2, 4, 5, 8]



