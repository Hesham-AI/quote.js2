
var quote =[
{
    text:" “Be yourself; everyone else is already taken.” ",
name:"― Oscar Wilde", 
},

{
    text:" “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”  ",

name:" ― Marilyn Monroe ", 
},


{
    text:" “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",

name:"― Albert Einstein ",
},


{
    text:" “So many books, so little time.” ",
name:"― Frank Zappa"
}



]




var newNum;

function num() {
   var i = Math.floor(Math.random() * quote.length);
   while (i === newNum) {
      i = Math.floor(Math.random() * quote.length);
   }
   newNum = i;
   return newNum;
}


function check() {
   var number = num();

   document.getElementById("quote-random").innerHTML=quote[number].text + "<br>" +"<hr></hr>"+ quote[number].name;

}
