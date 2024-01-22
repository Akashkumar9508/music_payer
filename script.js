const progress = document.getElementById("progress");
const song = document.getElementById("song");
const playpause = document.getElementById("playpause");

song.addEventListener("loadedmetadata", function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
});

playpause.addEventListener("click", function () {
    if (playpause.classList.contains("bx-play")) {
        song.play();
        playpause.classList.remove("bx-play");
        playpause.classList.add("bx-pause");
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    } else {
        song.pause();
        playpause.classList.add("bx-play");
        playpause.classList.remove("bx-pause");
    }
});

progress.oninput = function () {
    song.currentTime = progress.value;
};
song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});
