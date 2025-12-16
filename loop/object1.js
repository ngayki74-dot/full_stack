let mobile_data={                  // object creation
    product_name:"moto 50 fusion",    // key:value pair
    price:19999,
    description:"moto 50 fusion with 6.5 inch display and 5000mah battery",  // key:value pair
    ram:"8gb",
    rom:"128gb",
    camera:"50mp",
    battery:"5000mah",
    warrenty:"1 year",
    color:["black","white","green","red","blue"]   // key:value pair
}
mobile_data.price=18999            // updating the value of key price
delete mobile_data.warrenty      // deleting the key warrenty from object
mobile_data.color="red"       // updating the value of key color
 console.log(mobile_data)                              // print the object      
console.log("camera",mobile_data.camera)          // print the value of key camera
console.log("price",mobile_data.price)            // print the value of key price
console.log("description",mobile_data.description) // print the value of key description


for(let key in mobile_data){          // for in loop to print key and value of object
    console.log(key,mobile_data[key])
}
