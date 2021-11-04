const input = document.querySelector('.myInput');
const msg = document.querySelector('.msg')
const number = Math.floor(Math.random() * 100);
const myButton = document.querySelector('.btn');

const playerChoice = parseInt(input.value)

let counter = 0;

myButton.addEventListener('click', function(){
    if(parseInt(input.value) > number){
        msg.textContent = `${parseInt(input.value)} is bigger than the secret number!`
        counter++;
    }else if(parseInt(input.value) < number){
        msg.textContent = `${parseInt(input.value)} is smaller than the secret number!`
        counter++;
    }else if(parseInt(input.value) === number && counter === 0){
        msg.textContent = `You've won! The secret number was ${number} and you had ${counter + 1} guess`;
    }else{
        counter++;
        msg.textContent = `You've won! The secret number was ${number} and you had ${counter} guesses`;
    }
    
})