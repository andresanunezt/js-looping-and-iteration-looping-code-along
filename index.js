// Code your solutions in this file

function writeCards(names, event) {
    let thankYouList = []
for (let i = 0; i < names.length; i++ ) {
    
  thankYouList.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return thankYouList;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number--);
      } 
}

