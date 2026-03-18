let totalClicked = 0;

window.addEventListener('click', function() {
    const glitch = document.getElementById('glitch-sound');
    const startScreen = document.getElementById('start-screen');
    
   
    if (startScreen && !startScreen.classList.contains('hidden')) {
        if (glitch) {
            glitch.play().catch(e => console.log("Sound waiting for interaction"));
        }
    }
}, { once: true });

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

        
        if (victorySound) {
            victorySound.play();
        }
    }
}

window.addEventListener('click', function() {
    const glitch = document.getElementById('glitch-sound');
    const startScreen = document.getElementById('start-screen');
    
    if (startScreen && !startScreen.classList.contains('hidden')) {
        if (glitch) {
            glitch.muted = false; 
            glitch.play();
            glitch.currentTime = 0; 
            console.log("Glitch sound forced start.");
        }
    }
}, { once: true });