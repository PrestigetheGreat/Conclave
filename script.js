const videos = document.querySelectorAll('.video-slide');
let current = 0;
let timer;

function switchVideo() {
  videos[current].classList.remove('active');
  current = (current + 1) % videos.length;
  videos[current].classList.remove('active');
  videos[current].currentTime = 0;
  videos[current].play();
  videos[current].classList.add('active');
}

function startCycle() {
  videos[0].play();
  videos[0].classList.add('active');
  timer = setInterval(switchVideo, 8000);
}

videos.forEach((video, index) => {
  video.pause();
  video.classList.remove('active');
});

startCycle();
