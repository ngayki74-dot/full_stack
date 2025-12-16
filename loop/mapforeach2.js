let number=[12,15,48,5,3,1]
number.map(function(el,index,array){
console.log(el)                           //12,15,48,5,3,1
console.log(index)                         //output=0 1 2 3 4 5
console.log(array)                         //[ 12, 15, 48, 5, 3, 1 ]
                                   // output = [ 12, 15, 48, 5, 3, 1 ]
                                            //[ 12, 15, 48, 5, 3, 1 ]
                                          //[ 12, 15, 48, 5, 3, 1 ]
                                          //[ 12, 15, 48, 5, 3, 1 ]
                                           //[ 12, 15, 48, 5, 3, 1 ]
   if(el%2==0){console.log(el)}            //output=12,18 
  if(el%2==1){console.log(el)}                //15,5,3,1           

})

//return
let abc =[4,8,12,15,7,19,20]
let nsg=abc.map(function(el,index,array){
    if(el%2==1){
        return el
    }

})
console.log(nsg)                   //output 15,7,19

//simple rule
//mathod             return                  result
//map()              yes                     new array
//foreach()          no                     only loop
//function()         yes                    valum (parat)