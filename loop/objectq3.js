//objject question 3) 
//find the sum of elements whose occurence is 2 you have to chek the frequency of each element
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
let sum=0;
for(let key in obj){
    if(obj[key]===2){
        sum=sum+Number(key);
        //or sum=+ +(key):
    }
}
console.log(sum)                                     //output:9       //2+3+4=9
//object question 3 end
//key=2
//obj[2]===2 true
//sum=sum+Number(2)   sum=0+2=2
//next iteration
//key=3
//obj[3]===2 true
//sum=sum+Number(3)   sum=2+3=5
//next iteration
//key=4
//obj[4]===2 true
//sum=sum+Number(4)   sum=5+4=9

//next iteration
//key=5
//obj[5]===2 false
//next iteration
//key=6
//obj[6]===2 false
//next iteration
//key=7
//obj[7]===2 false
//object end

//num=7
//obj[7]===undefined true
//obj[7]=1            output={ '7': 1 }
//next iteration
//num=2
//obj[2]===undefined true
//obj[2]=1            output={ '2': 1,'7': 1 }
//next iteration
//num=7
//obj[7]===undefined false
//obj[7]++            output={ '2': 1,'7': 2 }
//next iteration
//num=7
//obj[7]===undefined false
//obj[7]++            output={ '2': 1,'7': 3 }
//next iteration
//num=2
//obj[2]===undefined false

//obj[2]++            output={ '2': 2,'7': 3 }
//next iteration
//num=3
//obj[3]===undefined true
//obj[3]=1            output={ '2': 2,'3': 1,'7': 3 }
//next iteration
//num=4
//obj[4]===undefined true
//obj[4]=1            output={ '2': 2,'3': 1,'4': 1,'7': 3 }
//next iteration
//num=3
//obj[3]===undefined false
//obj[3]++            output={ '2': 2,'3': 2,'4': 1,'7': 3 }
//next iteration
//num=5
//obj[5]===undefined true
//obj[5]=1            output={ '2': 2,'3': 2,'4': 1,'5': 1,'7': 3 }
//next iteration
//num=6
//obj[6]===undefined true
//obj[6]=1            output={ '2': 2,'3': 2,'4': 1,'5': 1,'6': 1,'7': 3 }
//next iteration
//num=4
//obj[4]===undefined false
//obj[4]++            output={ '2': 2,'3': 2,'4': 2,'5': 1,'6': 1,'7': 3 }
//next iteration
//num=7
//obj[7]===undefined false
//obj[7]++            output={ '2': 2,'3': 2,'4': 2,'5': 1,'6': 1,'7': 4 }
//object end


//| Iteration | num | obj (पूर्वी)          | obj (नंतर)                 | स्पष्टीकरण                 |
//| --------- | --- | ------------------ | -------------------------- | -------------------------- |
//| 1         | 7   | {}                 | { '7': 1 }                 | 7 अजून नाही → 1 सेट करा    |
//| 2         | 2   | { '7': 1 }         | { '7': 1, '2': 1 }         | 2 अजून नाही → 1 सेट करा    |
//| 3         | 7   | { '7': 1, '2': 1 } | { '7': 2, '2': 1 }         | 7 आधीपासून आहे → increment |
//| 4         | 7   | { '7': 2, '2': 1 } | { '7': 3, '2': 1 }         | 7 आधीपासून आहे → increment |
//| 5         | 2   | { '7': 3, '2': 1 } | { '7': 3, '2': 2 }         | 2 आधीपासून आहे → increment |
//| 6         | 3   | { '7': 3, '2': 2 } | { '7': 3, '2': 2, '3': 1 } | 3 अजून नाही → 1 सेट करा    |
//| 7         | 4   | ...                | '4' → 1                    | 4 अजून नाही → 1 सेट करा    |
//| 8         | 3   | ...                | '3' → 2                    | 3 आधीपासून आहे → increment |
//| 9         | 5   | ...                | '5' → 1                    | 5 अजून नाही → 1 सेट करा    |
//| 10        | 6   | ...                | '6' → 1                    | 6 अजून नाही → 1 सेट करा    |
//| 11        | 4   | ...                | '4' → 2                    | 4 आधीपासून आहे → increment |
//| 12        | 7   | ...                | '7' → 4                    | 7 आधीपासून आहे → increment |
