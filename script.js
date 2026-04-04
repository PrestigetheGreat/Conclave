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

const ticket = document.getElementById('floating-ticket');

const topBoundary = window.innerHeight * 0.42;
const bottomBoundary = window.innerHeight * 0.88;
const leftBoundary = 0;
const rightBoundary = window.innerWidth - 120;

let x = Math.random() * rightBoundary;
let y = topBoundary + Math.random() * (bottomBoundary - topBoundary);
let dx = 0.8;
let dy = 0.8;

function moveTicket() {
  x += dx;
  y += dy;

  if (x <= leftBoundary || x >= rightBoundary) dx *= -1;
  if (y <= topBoundary || y >= bottomBoundary) dy *= -1;

  ticket.style.left = x + 'px';
  ticket.style.top = y + 'px';

  requestAnimationFrame(moveTicket);
}

moveTicket();
