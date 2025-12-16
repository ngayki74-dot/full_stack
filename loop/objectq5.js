//array of ojects find the occarence of elements .Occurrence / Frequency म्हणजे एखादा element array मध्ये किती वेळा आला आहे.
let emp_data=[
    {name:"aman",age:23,city:"pune"},
    {name:"raj",age:24,city:"mumbai"},
    {name:"sonam",age:22,city:"pune"},
    {name:"anil",age:25,city:"banglore"},
    {name:"rita",age:23,city:"mumbai"},
    {name:"sneha",age:24,city:"pune"},
]
for(let i=0;i<emp_data.length;i++){
    
    

//console.log(emp_data);   //output the array of objects
//output:[ { name: 'aman', age: 23, city: 'pune' },
//  { name: 'raj', age: 24, city: 'mumbai' },
//  { name: 'sonam', age: 22, city: 'pune' },
//  { name: 'anil', age: 25, city: 'banglore' },
//  { name: 'rita', age: 23, city: 'mumbai' },
//  { name: 'sneha', age: 24, city: 'pune' } ]
//array of objects end


//console.log(emp_data[i].city); //output the city of each object
//output:pune
//output:mumbai
//output:pune
//output:banglore
//output:mumbai
//output:pune
//array of objects city end

//if(emp_data[i].city=="pune") {
   // console.log(emp_data[i].name);}
//output:aman
//output:sonam
//output:sneha
//array of objects name end

if(emp_data[i].city=="pune") {
    if(emp_data[i].age>22 && emp_data[i].age<25){
        console.log(emp_data[i].name);
    }
    }
}
//output:aman
//output:sneha
//array of objects name with condition end
