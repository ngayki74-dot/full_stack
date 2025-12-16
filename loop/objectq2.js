//object question 2) string frequency in object
let str="skillonit "
let obj={};
for(let i=0;i<str.length;i++){
    let char=str[i];
    if(obj[char]===undefined){
        obj[char]=1;
    }else{obj[char]++;}
    }
    console.log(obj) 
//output:{ s: 1, k: 1, i: 2, l: 2, o: 1, n: 1, t: 1, ' ': 1 }
//char=s
//obj[s]===undefined true
//obj[s]=1            output:{ s: 1 }
//next iteration
//char=k
//obj[k]===undefined true
//obj[k]=1            output:{ s: 1, k: 1 }
//next iteration
//char=i
//obj[i]===undefined true
//obj[i]=1            output:{ s: 1, k: 1, i: 1 }
//next iteration
//char=l
//obj[l]===undefined true
//obj[l]=1            output:{ s: 1, k: 1, i: 1, l: 1 }
//next iteration
//char=l
//obj[l]===undefined false
//obj[l]++            output:{ s: 1, k: 1, i: 1, l: 2 }
//next iteration
//char=o
//obj[o]===undefined true
//obj[o]=1            output:{ s: 1, k: 1, i: 1, l: 2, o: 1 }
//next iteration
//char=n
//obj[n]===undefined true
//obj[n]=1            output:{ s: 1, k: 1, i: 1, l: 2, o: 1, n: 1 }
//next iteration
//char=i
//obj[i]===undefined false
//obj[i]++            output:{ s: 1, k: 1, i: 2, l: 2, o: 1, n: 1 }
//next iteration
//char=t
//obj[t]===undefined true
//obj[t]=1            output:{ s: 1, k: 1, i: 2, l: 2, o: 1, n: 1, t: 1 }
//next iteration
//char=' '
//obj[' ']===undefined true
//obj[' ']=1          output:{ s: 1, k: 1, i: 2, l: 2, o: 1, n: 1, t: 1, ' ': 1 }
//object question 2 end
