//object question 1)  number of keys in object
//what is the frequency of each element in the array
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

let a="5"
let b=5
console.log(a+b) //concatenation  //output:55  कारण a ही string आहे आणि b ही number आहे.
//  JavaScript मध्ये जर एक operand string असेल तर दुसऱ्या operand ला देखील string मध्ये convert करून concatenation करतो.
console.log(typeof (a+b)) //output:string  कारण a+b चे परिणामस्वरूप एक string तयार होतो.

console.log(Number(a)+b) //addition  //output:10  कारण Number(a) वापरून a ला number मध्ये convert केले आहे.
console.log(typeof (Number(a)+b)) //output:number  कारण Number(a)+b चे परिणामस्वरूप एक number तयार होतो.
console.log(+a+b) //addition  //output:10  कारण +a वापरून a ला number मध्ये convert केले आहे.
console.log(typeof (+a+b)) //output:number  कारण +a+b चे परिणामस्वरूप एक number तयार होतो.
console.log(string(b)) //output:5  कारण string() वापरून b ला string मध्ये convert केले आहे.
console.log(typeof string(b)) //output:string  कारण string(b) चे परिणामस्वरूप एक string तयार होतो.

