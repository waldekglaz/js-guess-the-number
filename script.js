const input = document.querySelector('.myInput');
const msg = document.querySelector('.msg')
const number = Math.floor(Math.random() * 100);
const myButton = document.querySelector('.btn');

const playerChoice = parseInt(input.value)
console.log(number)
let counter = 0;

myButton.addEventListener('click', function(){
    if(parseInt(input.value) > number){
        msg.textContent = `The secret number is smaller than ${parseInt(input.value)}`
        counter++;
    }else if(parseInt(input.value) < number){
        msg.textContent = `The secret number is bigger than ${parseInt(input.value)}`
        counter++;
    }else if(parseInt(input.value) === number && counter === 0){
        msg.textContent = `You've won! The secret number was ${number} and you had ${counter + 1} guess`;
    }else if(parseInt(input.value) === number){
        counter++;
        msg.textContent = `You've won! The secret number was ${number} and you had ${counter} guesses`;
        counter = 0;
    }else{
        msg.textContent = `Please type a number!`
    }
    
})