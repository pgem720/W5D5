

const readline = require('readline');
// Create the interface from the module
// this will allow us to receive user input
// via the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft === 0) {
    rl.close();
    completionCallback(sum);
    return; 
    }

    if (numsLeft > 0) {
        rl.question(`Input Number`, function (numString1){
            let number = parseInt(numString1);
            sum += number;
            console.log(`Your total is ${sum}`); 
            addNumbers(sum, numsLeft - 1, completionCallback)
        });
        } 
    
    
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));