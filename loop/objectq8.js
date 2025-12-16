//find the avg rating of all the products
let amazon=[                                   //array of objects start
    {name:"iphone 13",price:70000,rating:4.5},   //abject 1
    {name:"macbook",price:120000,rating:4.7},    //object 2
    {name:"plastation",price:50000,rating:3.8},  //object 3
    {name:"xbox",price:40000,rating:3.5},        //object 4
    {name:"airpods",price:20000,rating:4.2},   //object 5
]
let sum=0;                               //sum variable declare
for(let i=0;i<amazon.length;i++){      //amazon.length → array मधील एकूण products ची लांबी म्हणजेच संख्या
    let product=amazon[i];            //amazon[i] → array मधील प्रत्येक product ला access करण्यासाठी
    sum=sum+product["rating"];       //sum=sum+product.rating → प्रत्येक product चा rating sum मध्ये add करण्यासाठी
}
console.log(sum/amazon.length);   //sum/amazon.length → average rating काढण्यासाठी sum ला products च्या संख्येने divide करतो
//output:4.34
//object question 8 end