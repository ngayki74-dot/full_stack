//print a factorail of 5 =120
    //5*4*3*2*1=120

    let fact = 1;
    for(let i=1;i<=5;i++){
        fact=fact * i
        console.log(fact,"hello")
    }

  //  📌 स्पष्टीकरण (मराठीत)

//सुरुवातीला fact = 1 ठेवले आहे.

//for लूप 1 ते 5 पर्यंत चालतो.

//प्रत्येक वेळी fact मध्ये i ने गुणाकार केला जातो. म्हणजे तू factorial क्रमाने मोजतोस.

//नंतर प्रत्येक स्टेपला fact आणि "hello" कन्सोलमध्ये प्रिंट होते.

//🖨️ कन्सोलमध्ये येणारा आउटपुट:
//1 hello          i=1;    1<=5;    fact=1*1;    console.log(1)
//2 hello          i=1;    2<=5;    fact=1*2;    console.log(2)
//6 hello          i=1;    3<=5;    fact=2*3;    console.log(6)
//24 hello         i=1;    4<=5;    fact=6*4;    console.log(24)
//120 hello        i=1;    5<=5;    fact=24*5;    console.log(120)



//print the sum of 1 to 5       ==>15
//1+2+3+4+5=15

let sum=0
for(let a=1;a<=5; a++){
sum=sum +a;
console.log(sum)
}



