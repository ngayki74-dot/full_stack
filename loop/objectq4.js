//find the unique elements in the array.find the occarence of elements .Occurrence / Frequency म्हणजे एखादा element array मध्ये किती वेळा आला आहे.
let arr=[7,2,7,7,2,3,4,3,5,6,4,7];
let obj={};
for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if (obj[num]===undefined){
         obj[num]=1;
    }else{obj[num]++;}
    }
console.log(obj);
//output:{ '2': 2, '3': 2, '4': 2, '5': 1, '6': 1, '7': 4 }
for(let key in obj){
if(obj[key]==1){
    console.log(key);
}
}
//output:5
//output:6
//object question 4 end
