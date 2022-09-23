let output = document.getElementById('output');
const submitButton = document.getElementById('submit');

let attempts = 3;

let randomNum = [Math.floor(Math.random() * 100)];
console.log(randomNum);

submitButton.addEventListener('click', function (){
    let input = document.getElementById('input').value;
    if(input == randomNum) {
        output.innerHTML = randomNum + " is the correct guess!!";
        output.style.color = 'green';
        alert('You won! Click on reset to play again');
        submitButton.disabled = true;
    }
    else if( input < randomNum && input <= 100) {
        output.innerHTML = 'Number is too low';
        output.style.color = 'red';
        attempts--;
    }
    else if( input > randomNum && input <= 100) {
        output.innerHTML = 'Number is too high';
        output.style.color = 'red';
        attempts--;
    }
    else if( input < 1 || input > 100){
        output.innerHTML = 'It has to be a number between 1 and 100';
        output.style.color = 'red';
        attempts--;
    }
        if(attempts == 0) {
            alert('Game Over! Click on reset to play again');
            submitButton.disabled = true;
        }
    
})

function clearAll(){
    attempts = 3;
    document.getElementById('myform').reset();
    randomNum = [Math.floor(Math.random() * 100)];
    output.innerHTML = 'Enter a number below';
    output.style.color = 'black';
    submitButton.disabled = false;
    console.log(randomNum);
    
}

