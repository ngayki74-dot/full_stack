  //map vs forEach  defrant

  //map
  let array=[1,2,3,4,5]
  let newarray1=array.map(function(el,index,array){
    return el*2
  })
  console.log(newarray1)               //[2,4,6,8,10]

  //forEach
    let number=[1,2,3,4,5]
  let newarray2=number.forEach(function(el,index,array){
    return el*2
  })
  console.log(newarray2)            //output= undefined

  