// 1. Setup the counter at the very top
let totalClicked = 0;

console.log("Script loaded and ready!");

// 2. The main function for finding items
function found(itemName) {
    console.log("System detected click on: " + itemName);

    const checkmark = document.getElementById('check-' + itemName);
    const hitbox = document.getElementById('hit-' + itemName);

    // Only run if the checkmark exists and hasn't been found yet
    if (checkmark && checkmark.classList.contains('hidden')) {
        
        checkmark.classList.remove('hidden');
        checkmark.classList.add('checkmark-animated');
        
        if (hitbox) {
            hitbox.style.pointerEvents = 'none';
        }

        totalClicked = totalClicked + 1;
        console.log("Score: " + totalClicked + "/8");

        // When all 8 are found, change the screen
        if (totalClicked === 8) {
            finishGame();
        }
    }
}

// 3. Function to start the game
function startGame() {
    console.log("Starting game...");
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');

    if (startScreen && gameScreen) {
        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    }
}

// 4. Function to end the game
function finishGame() {
    console.log("Game Finished! Switching to end screen.");
    const gameArea = document.getElementById('game-screen');
    const endArea = document.getElementById('end-screen');

    if (gameArea && endArea) {
        gameArea.style.display = 'none'; // Force hide
        endArea.style.display = 'block'; // Force show
        endArea.classList.remove('hidden');
    }
}