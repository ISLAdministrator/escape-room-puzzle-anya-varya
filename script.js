let totalClicked = 0;

// 1. START THE GLITCH (Runs when player clicks anywhere)
window.addEventListener('click', function() {
    const glitch = document.getElementById('glitch-sound');
    const startScreen = document.getElementById('start-screen');
    
    // Only play if the start screen is still visible
    if (startScreen && !startScreen.classList.contains('hidden')) {
        if (glitch) {
            glitch.play().catch(e => console.log("Sound waiting for interaction"));
        }
    }
}, { once: true });

// 2. START THE GAME (Stops glitch, swaps screens)
function startGame() {
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const glitch = document.getElementById('glitch-sound');

    if (startScreen && gameScreen) {
        if (glitch) {
            glitch.pause();
            glitch.currentTime = 0; 
        }
        startScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
    }
}

// 3. FIND ITEMS (Plays "ding" sound, updates score)
function found(itemName) {
    const checkmark = document.getElementById('check-' + itemName);
    const hitbox = document.getElementById('hit-' + itemName);
    const sound = document.getElementById('found-sound');

    if (checkmark && checkmark.classList.contains('hidden')) {
        checkmark.classList.remove('hidden');
        checkmark.classList.add('checkmark-animated');
        
        if (sound) {
            sound.currentTime = 0; 
            sound.play();
        }

        if (hitbox) {
            hitbox.style.pointerEvents = 'none';
        }

        totalClicked = totalClicked + 1;
        if (totalClicked === 8) {
            finishGame();
        }
    }
}

function finishGame() {
    console.log("Game Finished! Switching to end screen.");
    const gameArea = document.getElementById('game-screen');
    const endArea = document.getElementById('end-screen');
    const victorySound = document.getElementById('victory-sound'); //

    if (gameArea && endArea) {
        gameArea.style.display = 'none'; //
        endArea.style.display = 'block'; //
        endArea.classList.remove('hidden'); //

        // Play the victory sound
        if (victorySound) {
            victorySound.play();
        }
    }
}
// Add this at the very bottom of your script.js
window.addEventListener('click', function() {
    const glitch = document.getElementById('glitch-sound');
    const startScreen = document.getElementById('start-screen');
    
    // Check if we are still on the start screen
    if (startScreen && !startScreen.classList.contains('hidden')) {
        if (glitch) {
            glitch.muted = false; // Unmute it instantly
            glitch.play();
            // This forces the sound to jump to the start with 0 delay
            glitch.currentTime = 0; 
            console.log("Glitch sound forced start.");
        }
    }
}, { once: true });