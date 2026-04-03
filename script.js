const video = document.getElementById('bg-video');
const carouselLeft = document.getElementById('carousel-left');
const carouselRight = document.getElementById('carousel-right');
const leftWrapper = document.getElementById('carousel-left-wrapper');
const rightWrapper = document.getElementById('carousel-right-wrapper');

document.addEventListener('DOMContentLoaded', function () {
  video.muted = true;
  video.play().catch(function () {
    console.log('Autoplay blocked');
  });
  if (carouselLeft) carouselLeft.play();
  if (carouselRight) carouselRight.play();
});

window.addEventListener('click', function () {
  video.play();
  if (carouselLeft) carouselLeft.play();
  if (carouselRight) carouselRight.play();
}, { once: true });

let showLeft = true;

if (leftWrapper) leftWrapper.classList.add('visible');
if (rightWrapper) rightWrapper.classList.remove('visible');

setInterval(function () {
  if (showLeft) {
    if (leftWrapper) leftWrapper.classList.remove('visible');
    setTimeout(function () {
      if (rightWrapper) rightWrapper.classList.add('visible');
    }, 400);
  } else {
    if (rightWrapper) rightWrapper.classList.remove('visible');
    setTimeout(function () {
      if (leftWrapper) leftWrapper.classList.add('visible');
    }, 400);
  }
  showLeft = !showLeft;
}, 2000);

const ticket = document.querySelector('.floating-ticket');
let x = 50;
let y = 50;
let dx = 0.8;
let dy = 0.8;

function moveTicket() {
  x += dx;
  y += dy;

  if (x <= 0 || x >= window.innerWidth - 120) dx *= -1;
  if (y <= 0 || y >= window.innerHeight - 50) dy *= -1;

  ticket.style.left = x + 'px';
  ticket.style.top = y + 'px';

  requestAnimationFrame(moveTicket);
}

if (ticket) moveTicket();
