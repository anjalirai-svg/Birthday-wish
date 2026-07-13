// ===============================
// Typewriter Effect
// ===============================

const text =
"To the world's best brother, may your birthday be as amazing as you are! ❤️";

let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    }
}

window.onload = () => {
    typeWriter();
};

// ===============================
// Gift Button + Surprise + Confetti
// ===============================

const giftBtn = document.getElementById("giftBtn");
const surprise = document.getElementById("surprise");

giftBtn.addEventListener("click", () => {

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    // Confetti
    confetti({
        particleCount: 180,
        spread: 120,
        origin: {
            y: 0.6
        }
    });

    setTimeout(() => {

        confetti({
            particleCount: 150,
            spread: 160
        });

    }, 700);

});

// ===============================
// Music Player
// ===============================

const musicBtn = document.getElementById("musicBtn");
const song = document.getElementById("song");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        song.play();

        musicBtn.innerHTML = "⏸ Pause Music";

        playing = true;

    } else {

        song.pause();

        musicBtn.innerHTML = "🎵 Play Birthday Music";

        playing = false;

    }

});

// ===============================
// Image Zoom Effect
// ===============================

const images = document.querySelectorAll(".images img");

images.forEach((img) => {

    img.addEventListener("click", () => {

        if (img.classList.contains("zoom")) {

            img.classList.remove("zoom");

        } else {

            images.forEach(i => i.classList.remove("zoom"));

            img.classList.add("zoom");

        }

    });

});

// ===============================
// Floating Hearts
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}

setInterval(createHeart, 1200);

// ===============================
// Welcome Animation
// ===============================

const hero = document.querySelector(".hero");

hero.style.opacity = "0";

setTimeout(() => {

    hero.style.transition = "1.5s";

    hero.style.opacity = "1";

}, 200);

// ===============================
// Happy Birthday Popup
// ===============================

setTimeout(() => {

    alert("🎉 Happy Birthday! Wishing you a wonderful year ahead! ❤️");

}, 1500);
