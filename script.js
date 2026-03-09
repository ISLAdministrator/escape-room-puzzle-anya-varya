let totalClicked = 0; 

function found(itemName) {
    // This alert helps us test if the click is even working
    console.log("System detected click on: " + itemName);

    const checkmark = document.getElementById('check-' + itemName);
    const hitbox = document.getElementById('hit-' + itemName);

    if (checkmark && checkmark.classList.contains('hidden')) {
        checkmark.classList.remove('hidden');
        checkmark.classList.add('checkmark-animated');
        
        if (hitbox) {
            hitbox.style.pointerEvents = 'none';
        }

        totalClicked = totalClicked + 1;
        console.log("Score: " + totalClicked + "/8");

        if (totalClicked === 8) {
            finishGame();
        }
    }
}

function finishGame() {
    const gameArea = document.getElementById('game-screen');
    const endArea = document.getElementById('end-screen');

    if (gameArea && endArea) {
        gameArea.style.display = 'none'; // Force hide
        endArea.style.display = 'block'; // Force show
        endArea.classList.remove('hidden');
    } else {
        alert("Error: Could not find the screen IDs. Check your HTML!");
    }
}

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
function found(itemName) {
    // 1. Find the checkmark image and show it with the animation
    const checkmark = document.getElementById('check-' + itemName);
    if (checkmark) {
        checkmark.classList.remove('hidden');
        checkmark.classList.add('checkmark-animated');
    }

    // 2. Make the hitbox unclickable so you don't find it twice
    const hitbox = document.getElementById('hit-' + itemName);
    if (hitbox) {
        hitbox.style.pointerEvents = 'none';
    }
}