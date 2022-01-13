var video = document.getElementById("vid");
var vol = 1;
var subVid = document.getElementById("subvid")

function playVid() {
    video.play();
}

function pauseVid() {
    video.pause();
}

function volume(volData) {
    vol += volData;
    video.volume = vol;
}


    subVid.addEventListener("click", changeVid);

    function changeVid(vidSrc) {
    video.src = vidSrc
}
