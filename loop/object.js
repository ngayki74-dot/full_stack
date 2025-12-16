//object   =an object that represents a loop structure in a programming language.object – प्रोग्रॅमिंग भाषेमध्ये लूप स्ट्रक्चर (loop structure) दर्शवणारी एक ऑब्जेक्ट.
//loop.js  =a JavaScript file that contains code related to loop structures.loop.js – लूप स्ट्रक्चरशी संबंधित कोड असलेली JavaScript फाईल.
//object=sentex
//obj={key:"value"
//     key : "value"}

let mark=[80,98,97,89,76]  //mark आणि mark1 हे दोन arrays आहेत—एकात मार्क्स, तर दुसऱ्यात विषयांची नावे.
let mark1=["english", "maths", "science", "hindi", "marathi"]
let result={
    name:"rahul",  //result हे एक object आहे ज्यात विद्यार्थ्याचे नाव आणि त्याचे विषयनिहाय गुण दिले आहेत.
    english:76,
    maths:89,
    science:98,
    hindi:80,
    marathi:97
}
console.log(result)  //console.log() वापरून तुम्ही संपूर्ण object आणि काही विशिष्ट property print करत आहात.

console.log("name:",result.name)
console.log("english:",result.english)
console.log("maths:",result.maths)


//how to access this values       // मूल्ये access करण्याचे दोन प्रकार:
//console.log(detale["key"]) 1st method  bracket notation   (कंस पद्धत)
//console.log(detale.key) 2nd method dot notation         (डॉट पद्धत)

let detale={
    name:"rahul",
    age:20,
    city:"pune"
}
console.log(detale)        //output:{ name: 'rahul', age: 20, city: 'pune' }
console.log(detale["name"])  //bracket notation       output:rahul
console.log(detale.name)     //dot notation         output:rahul
console.log(detale["age"])   //bracket notation       output:20
console.log(detale.age)      //dot notation         output:20
console.log(detale["city"])  //bracket notation       output:pune
console.log(detale.city)     //dot notation         output:pune
//new add key value pair in object
detale.country="india"   //object मध्ये नवीन key-value pair कसे add करायचे ते दाखवले आहे.
console.log(detale)      //output:{ name: 'rahul', age: 20, city: 'pune', country: 'india' }
//update value in object
detale.age=21            //object मधील existing key चा value कसा update करायचा ते दाखवले आहे.
console.log(detale)      //output:{ name: 'rahul', age: 21, city: 'pune', country: 'india' }