const video = document.getElementById('bg-video');

document.addEventListener('DOMContentLoaded', function () {
  video.muted = true;
  video.play().catch(function () {
    console.log('Autoplay blocked');
  });
});

window.addEventListener('click', function () {
  video.play();
}, { once: true });

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

moveTicket();
