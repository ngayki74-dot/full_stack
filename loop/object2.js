//object
let detales={                  // object creation
    name:"sachin",            // key:value pair
    age:24,
    city:"pune",              // key:value pair
    profession:"developer",
    skills:["html","css","js","react"],   // key:value pair
    experience:"1 year",
    company:"xyz pvt ltd"
}
//console.log(detales)               //output alldetales
//console.log("name",detales.name)          // print the value of key name
//console.log("age",detales.age)            // print the value of key age
//console.log("city",detales.city)          // print the value of key city
//console.log("skills",detales.skills[2])      // print the value of key skills at index 2 
//"skills" हे एक लेबल म्हणून कन्सोलमध्ये दिसेल.detales.skills[2] → skills array मधील तिसरा घटक (index 2) प्रिंट होईल
//detales.age=25                     // updating the value of key age
//delete detales.experience          // deleting the key experience from object
//detales.city="mumbai"             // updating the value of key city
 //console.log(detales)                              // print the object

for(let key in detales){          // for in loop to print key and value of object
    console.log(key,detales[key])
}
//for in loop वापरून object मधील सर्व key-value pairs print केले आहेत. प्रत्येक iteration मध्ये key variable मध्ये current key येते आणि detales[key] वापरून त्याची value access केली जाते.
//output:
// name sachin
// age 24
// city pune
// profession developer
// skills [ 'html', 'css', 'js', 'react' ]
// experience 1 year
// company xyz pvt ltd
//object end
//for in loop =>its work with bracket notation only.for...in loop वापरताना value ऍक्सेस करण्यासाठी bracket notation वापरणे आवश्यक आहे.