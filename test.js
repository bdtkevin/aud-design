var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
    vid.classList.add("stopfade");
}

// vid.addEventListener('ended', function () {
//     // only functional if "loop" is removed 
//     vid.pause();
//     // to capture IE10
//     vidFade();
// });

vid.addEventListener("click", () => {
    // if (vid.paused) {
    //     vid.play();
    //     // vid.classList.remove("stopfade");
    // } else {
    //     vid.pause();
    //     // vid.classList.add("stopfade");
    // }
    // vid.classList.toggle("stopfade");

    vid.paused ? vid.play() : vid.pause();
    vid.classList.toggle("stopfade");
});

// pauseButton.addEventListener("click", function () {
//     vid.classList.toggle("stopfade");
//     if (vid.paused) {
//         vid.play();
//         pauseButton.innerHTML = "Pause";
//     } else {
//         vid.pause();
//         pauseButton.innerHTML = "Paused";
//     }
// })