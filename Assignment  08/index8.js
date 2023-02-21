// a programm that check  wether a character  is uppe case and lower case alphabet
let letter = window.prompt("Enter the letter")
if(letter == letter.toUpperCase()){
    document.write("The letter is uppercase")
}else if(letter == letter.toLowerCase()){
    document.write("The letter is lowercase")
}else{
   document.write("Invalid Input")
}
