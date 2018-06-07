// Javascript Hi/Lo Game

//This function takes in one whole number integer from 0 to 100 (inclusive), compares it to a randomly selected number, and returns a sentence informing the player whether their guess was high or low and how many tries they have left.

// Stretch goal 3: Allow the user to put their name in before the game starts. When the user has won the game, let the user know they have won, using their name.
let tries = 0

function hilo(name, num) {

    tries++

    let scrtNum = Math.floor((Math.random() * 100) + 1)

    // Stretch goal 2:  Validate the user's input. If the user puts a anything other than a number, tell the user they can only use numbers.
    if (parseInt(num) === NaN) {return "Error: Not a valid guess.  You can only use numbers."}

    result = (num, tries) => {
        let tries_try = (7-tries > 1) ? "tries" : "try"
        let high_low = (num > scrtNum) ? "high" : "low"

        return `${num} is too ${high_low}! You have ${7-tries} more ${tries_try}.`
    }

    switch(true) {

        // Stretch goal 1:  If the user has not guessed the secret number in seven tries, the user loses.
        case (num != scrtNum && tries >= 7):
            tries = 0
            return "Game Over. You ran out of tries."
            break;

        //If the inputted number is too low, then the function returns a notification and will prompt them to try again.
        case (num < scrtNum):
            return result(num,tries)
            break;

        //If the inputted number is too high, then the function returns a notification and will prompt them to try again.
        case (num > scrtNum):
            return result(num,tries)
            break;
    }
    //If the inputted number is the same as the radomly generated number then the function returns a winning message and the game is over.
    tries = 0; console.log(`Congratulations, ${name}! You guessed the right number to be ${num}!`)
}

//Test the code to see it runs

for (let i = 7; i > 0; i--) {
    let guess = Math.floor((Math.random() * 100) + 1)
    console.log(hilo("Jack", guess))
}

//SECOND DRAFT
// function result(num, tries) {
//     high_low = ["high", "low"]
//     tries_try = ["tries", "try"]
//
//
//     `${num} is too ${result[0]}! You have ${7-tries} more ${}.`
//
//
// let tries = 0
//
// function hilo(num) {
//
//     tries++
//
//     let scrtNum = Math.floor((Math.random() * 100) + 1)
//
//     switch(true) {
//
//         // If the length of the try array equals 7 and the guess is still wrong then empty and array and quit the game
//         case (num != scrtNum && tries >= 7):
//             tries = 0; return "Game Over. You ran out of tries";
//             break;
//
//         //If the inputted number is too low, then the function returns a notification and will prompt them to try again.
//         case (num < scrtNum):
//             if (7-tries == 1) {
//             return `${num} is too high! You have ${7-tries} more try.`
//         }   return `${num} is too high! You have ${7-tries} more tries.`
//         break;
//
//         //If the inputted number is too high, then the function returns a notification and will prompt them to try again.
//         case (num > scrtNum):
//             if (7-tries == 1) {
//                 return `${num} is too high! You have ${7-tries} more try.`
//             }   return `${num} is too high! You have ${7-tries} more tries.`
//             break;
//     }
//     //If the inputted number is the same as the radomly generated number then the function returns a winning message and the game is over.
//     tries = 0; return `Congratulations! ${num} is the right number!`
// }
//
// // Test to see if the function works
// for (let i = 50; i > 0; i--) {
//     let guess = Math.floor((Math.random() * 100) + 1)
//     console.log(hilo(guess))
// }

//FIRST DRAFT
//     if (tries == 7 && num != scrtNum) {  // if the length of the try array equals 7 and the guess is still wrong then empty and array and quit the game
//         tries = 0
//         return "Game Over. You ran out of tries"
//     } else if (num < scrtNum) {
//         return `${num} is too low! You have ${7-tries} more tries.`  //If the inputted number is too high or too low, then the function returns a notification and will prompt them to try again.
//     } else if (num > scrtNum) {
//         if (7-tries == 1) {
//             return `${num} is too high! You have ${7-tries} more try.`
//         } else {
//             return `${num} is too high! You have ${7-tries} more tries.`
//         }
//     } else {
//         return `Congratulations! ${num} is the right number!` //If the inputted number is the same as the radomly generated number then the function returns a winning message and the game is over.
//     }
//
// }
