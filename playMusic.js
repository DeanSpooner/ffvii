const button = document.querySelector("#button");
const audio = document.querySelector("audio");
audio.loop = true;

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
        button.classList.add('paused');
        button.classList.remove('play');

    } else {
        audio.pause();
        button.classList.remove('paused');
        button.classList.add('play');

    }
    button.classList.add("fade");
});