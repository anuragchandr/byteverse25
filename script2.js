const texts = [
    "Bridging hunger with dignity.",

    "Nourishment beyond numbers.",
    "Where data meets compassion.",

    "Empowering lives through meals."


];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;

const target = document.getElementById("typewriter-text");

function typeWriterLoop() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        target.textContent = currentText.substring(0, charIndex--);
    } else {
        target.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // loop to next phrase
    }

    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriterLoop, delay);
}

window.onload = typeWriterLoop;




