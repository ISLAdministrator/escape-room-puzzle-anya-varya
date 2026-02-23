console.log("Script loaded");

// below is basic example code for using a button
// you can use it, expand on it, or delete it
// that all depends on your team's plan.

const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click", function () {
    output.textContent = "JavaScript is working.";
});
/* Make sure the screens stack on top of each other */

//3. The JavaScript(script.js)
//Since you renamed your button / arrow and want to switch screens, make sure your script.js has this function:

//    JavaScript
function startGame() {
    // Hide the start screen
    document.getElementById('start-screen').classList.add('hidden');

    // Show the game screen
    document.getElementById('game-screen').classList.remove('hidden');
}
function startGame() {
    // 1. Get the Start Screen and add the 'hidden' class to it
    const startScreen = document.getElementById('start-screen');
    startScreen.classList.add('hidden');

    // 2. Get the Game Screen and remove the 'hidden' class from it
    const gameScreen = document.getElementById('game-screen');
    gameScreen.classList.remove('hidden');

    // Optional: Log it in the console to make sure it works
    console.log("The search begins!");
}