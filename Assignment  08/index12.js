// question 12
// input marks of five subjects ,calculate percentage and grade 

let chem = 100;
 let phy = 00;
 let bio = 00;
 let math = 00;
 let comp = 00;
 let sum = chem + phy + bio + math + comp
//  let per = sum/1100*100
 if( sum/1100*100>=90 & sum/1100*100 ){
     console.log("grade a+")
 }
else if(sum/1100*100>=80 & sum/1100*89){
    console.log("grade a")
    }
else if(sum/1100*100>=70 & sum/1100*79){
     console.log("grade b")
    }
else if(sum/1100*100>=60 & sum/1100*69){
    console.log("grade c")
     }
else  if(sum/1100*100>=50 & sum/1100*59){
     console.log("grade d")
    }
else  if(sum/1100*100>=40 & sum/1100*49){
        console.log("grade e")
       }
       else  if(sum/1100*100>=0 & sum/1100*40){
        console.log("grade f")
       }
else {
     console.log("invalid marks")
   }