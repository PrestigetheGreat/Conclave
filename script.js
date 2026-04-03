const videos = document.querySelectorAll('.video-slide');
let current = 0;

function switchVideo() {
  videos[current].classList.remove('active');
  current = (current + 1) % videos.length;
  videos[current].classList.add('active');
  videos[current].currentTime = 0;
  videos[current].play();
}

videos.forEach((video, index) => {
  if (index !== 0) {
    video.pause();
  }
  video.addEventListener('ended', switchVideo);
});

videos[0].play();
