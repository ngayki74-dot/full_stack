//map foreach
let arr=[4,8,7,12,15]

arr.map(function(el,index,array){
    console.log(el)
    console.log(index)
    console.log(array)
    if(el%2==0){
        console.log(el)
    }
    if(el%2==1){
     console.log(el)
   }
})


//let arr = [4, 8, 7, 12, 15];

arr.map(function(el, index, array){
    console.log(el);      // सध्याचा घटक                  //el → संख्या (4, 8, 7, 12, 15)
    console.log(index);   // त्या घटकाचा index            //index → त्या घटकाचा क्रमांक (0 ते 4)
    console.log(array);   // पूर्ण array                    //array → पूर्ण array

    if(el % 2 == 0){                                     //सम-विषम साठी if-else पुरेसा आहे
        console.log(el);  // सम (even) संख्या             
    }
    if(el % 2 == 1){
        console.log(el);  // विषम (odd) संख्या
    }
});

