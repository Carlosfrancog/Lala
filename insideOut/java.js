const text = "Even on the darkest nights, you bloom. My beautiful sunflower.";
const speed = 100;

const typeWriter = (text, speed) => {
    let i = 0;
    const typewriterEffect = () => {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriterEffect, speed);
        }
    }
    typewriterEffect();
}


typeWriter(text, speed);
