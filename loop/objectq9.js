//from the give array make an object
let products=["laptop","mobile","tablet","smartwatch"];
let prices=[70000,30000,20000,15000];
let arr=[];
for(let i=0;i<products.length;i++){
   
   // console.log(products[i])         //to print product names
  // console.log(prices[i])          //to print product prices

  //arr ka object banane ke liye
   let obj={};                 //object declare

   obj[products[i]]=prices[i];    //object मध्ये product name as key and price as value add करतो
   arr.push(obj);                    //object ला array मध्ये add करतो
}
console.log(arr);               //array of objects print करतो
//output:[ { laptop: 70000 }, { mobile: 30000 }, { tablet: 20000 }, { smartwatch: 15000 } ]

//array of objects name with condition
let emp_data=[                                //array of ojects find the occarence of elements .Occurrence / Frequency म्हणजे एखादा element array मध्ये किती वेळा आला आहे.
    {name:"aman",age:23,city:"pune"},        //object 1
    {name:"raj",age:24,city:"mumbai"},        //object 2
    {name:"sonam",age:22,city:"pune"},        //object 3
    {name:"anil",age:25,city:"banglore"},     //object 4
    {name:"rita",age:23,city:"mumbai"},      //object 5
    {name:"sneha",age:24,city:"pune"},      //object 6
]
for(let i=0;i<emp_data.length;i++){                //loop to access each object in the array
    if(emp_data[i].city=="pune") {                   //condition to check city is pune
        if(emp_data[i].age>22 && emp_data[i].age<25){     //condition to check age is greater than 22 and less than 25
            console.log(emp_data[i].name);           //print the name of the employee
        }
    }
}
//output:aman
//output:sneha
//array of objects name with condition end