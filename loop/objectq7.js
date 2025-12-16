//get name of the products whoese price is between 25000 to 60000
let amazon=[
    {name:"iphone 13",price:70000,rating:4.5},
    {name:"macbook",price:120000,rating:4.7},
    {name:"plastation",price:50000,rating:3.8},
    {name:"xbox",price:40000,rating:3.5},
    {name:"airpods",price:20000,rating:4.2},
]
for(let i=0;i<amazon.length;i++){             //amazon.length → array मधील एकूण products ची लांबी म्हणजेच संख्या
    let product=amazon[i];               //amazon[i] → array मधील प्रत्येक product ला access करण्यासाठी
    if(product["price"]>25000 && product["price"]<60000){   //product.price > 25000 && product.price < 60000 → price 25000 आणि 60000 च्या मध्ये आहे का ते तपासते
        console.log(product.name);     //product.name → product चं नाव console मध्ये print करण्यासाठी
    }
}
//output:plastation
//output:xbox
//object question 7 end