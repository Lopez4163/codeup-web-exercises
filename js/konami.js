// GLOBAL
let secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
let pressedKeys = [];

// FUNCTIONS
const KonamiFunctions = () => {
    const isCodeComplete = pressedKeys.every((key, index) => key === secretCode[index]);

    if (isCodeComplete && pressedKeys.length === secretCode.length) {
        alert('!!!YOU HAVE 30 LIVES!!!');
        const konamiCodeGif = document.getElementById('konamiCodeGif');
        konamiCodeGif.style.display = 'block';
        
    }
};

// EVENTS
document.addEventListener('keyup', e => {
    const key = e.key;
    pressedKeys.push(key);
    console.log(pressedKeys);
    KonamiFunctions(); // Check for Konami code completion after each key press
});
