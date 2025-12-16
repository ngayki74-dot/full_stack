//splice slice
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








