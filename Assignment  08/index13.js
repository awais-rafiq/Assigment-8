// question 13 basic salary of employee calculate gross salary 
// let sal= 10000;
// let net
// if(sal<=10000){
//     net=sal+(sal*)
// }
// if(sal<=20000){
//     net=sal+(sal*)
// }
// if(sal>20000){
//     net=sal+(sal*)
// }
let sal= 10000;
if(sal<=10000 & sal>=0){
    console.log("hra=20%, da= 80%")
}
else if(sal<=20000 & sal>=10000){
    console.log("hra=25%, da= 90%")
}
else if(sal>20000 ){
    console.log("hra=30%, da= 95%")
}
else{
    console.log("invalid input")
}