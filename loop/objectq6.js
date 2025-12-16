//print those product which have rating more than 4

let amazon=[                                   //array of objects start
    {name:"iphone 13",price:70000,rating:4.5},   //abject 1
    {name:"macbook",price:120000,rating:4.7},    //object 2
    {name:"plastation",price:50000,rating:3.8},  //object 3
    {name:"xbox",price:40000,rating:3.5},        //object 4
    {name:"airpods",price:20000,rating:4.2},   //object 5
]
for(let i=0;i<amazon.length;i++){      //amazon.length → array मधील एकूण products ची लांबी म्हणजेच संख्या
    let product=amazon[i];            //amazon[i] → array मधील प्रत्येक product ला access करण्यासाठी
    if(product["rating"]<4){         //product.rating < 4 → rating 4 पेक्षा कमी आहे का ते तपासते
        console.log(product.name);    //product.name → product चं नाव console मध्ये print करण्यासाठी
    }
}
//output:plastation                    
//output:xbox
//object question 6 end
//or
for(let i=0;i<amazon.length;i++){         //amazon.length → array मधील एकूण products ची लांबी म्हणजेच संख्या
    let product=amazon[i];                   //amazon[i] → array मधील प्रत्येक product ला access करण्यासाठी
    if(product["rating"]>4){              //product.rating > 4 → rating 4 पेक्षा जास्त आहे का ते तपासते
        console.log(product.name);     //product.name → product चं नाव console मध्ये print करण्यासाठी
    }                                 //if end
}
//output:iphone 13
//output:macbook
//output:airpods
//object question 6 end
