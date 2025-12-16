//fine the sum of even and odd from 1 to 10
//2+4+6+8+10=30
//1+3+5+7+9=25


for (let a=1;a<=10;a++){                //for (let a = 1; a <= 10; a++)a = 1 पासून सुरू होते.a <= 10 म्हणजे a चे मूल्य 10 पर्यंत लूप चालणार.
    if(a%2==0){console.log("even on is",a)}  //if (a % 2 == 0)a % 2 == 0 → जर संख्या 2 ने भागली आणि शिल्लक 0 आली
    else{console.log("odd on is",a)}//वरचा condition false असेल तर (म्हणजे 2 ने न भागणारी संख्या)Odd Number.हे प्रिंट होते
    }




let sum = 0      // Even numbers साठी बेरीज
let osum = 0     // Odd numbers साठी बेरीज

for (let b = 1; b <= 10; b++) {
    if (b % 2 == 0) {
        sum = sum + b       // Even number → sum मध्ये जमा       2 + 4 + 6 + 8 + 10 = 30
    } else {
        osum = osum + b     // Odd number → osum मध्ये जमा   1 + 3 + 5 + 7 + 9 = 25
    }
}

console.log("even num sum is", sum);   //even num sum is 30
console.log("odd num sume is", osum);  //odd num sume is 25


//Avarage [सरासरी]
//1 to 5 =    1+2+3+4+5=15/5=3


let sume = 0   // सर्व संख्यांची बेरीज ठेवण्यासाठी
let count = 0  // किती संख्या जोडल्या त्याची मोजणी

for (let c = 1; c <= 5; c++) {               //1 + 2 + 3 + 4 + 5 = 15
    sume += c;   // प्रत्येक संख्या बेरीजमध्ये जोडतो  //count = 5
    count++;     // मोजणी 1 ने वाढवतो         //15 / 5 = 3
}

console.log(sume / count);  //  output =3


