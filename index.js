// Code your solutions in this file

const messages = [];
function writeCards(names,event) {
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

console.log(messages)


const int = 10;

function countDown(int){
    while (int >= 0) {
        console.log(int--);
    }
    return 
}

countDown(int);
