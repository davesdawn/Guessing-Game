let output = document.getElementById('output');
const submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');
let attempts = 3;

let randomNum = [Math.floor(Math.random() * 100)];
console.log(randomNum);

submitButton.addEventListener('click', function guessRight(){
    let input = document.getElementById('input').value;
    if(input == randomNum) {
        output.innerHTML = randomNum + " is the correct guess!!";
        output.style.color = 'green';
    }
    else if( input < randomNum && input > 1) {
        output.innerHTML = 'Number is too low';
        output.style.color = 'red';
        attempts--;
    }
    else if( input > randomNum && input < 100) {
        output.innerHTML = 'Number is too high';
        output.style.color = 'red';
        attempts--;
    }
    else{
        output.innerHTML = 'it has to be a number between 1 and 100';
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
    
    
    if(input == randomNum) {
        output.innerHTML = randomNum + " is the correct guess!!";
        output.style.color = 'green';
    }
    else if( input < randomNum && input > 1) {
        output.innerHTML = 'Number is too low';
        output.style.color = 'red';
        attempts--;
    }
    else if( input > randomNum && input < 100) {
        output.innerHTML = 'Number is too high';
        output.style.color = 'red';
        attempts--;
    }
    else if(attempts == 0) {
        alert('Game Over! Click on reset to play again');
        submitButton.disabled = true;
    }
    
}


