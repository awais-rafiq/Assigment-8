// question 10
// a program to input the month number and print the number of in the month
let mon="4";
if( mon=="1" || mon=="3" || mon=="5" || mon=="7" || mon=="8" || mon=="10" || mon=="12" )
{
    console.log("31 days")
}
else if(mon=="4" ||mon=="6" ||mon=="9" ||mon=="11" )
{
    console.log("30 days")
}
else if(mon==2){
    console.log("28 days")
}
else{
    console.log("invalid")
}