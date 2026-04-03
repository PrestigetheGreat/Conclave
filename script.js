const video = document.querySelector('.video-slide');
video.play();

const ticket = document.querySelector('.floating-ticket');
let x = Math.random() * (window.innerWidth - 120);
let y = Math.random() * (window.innerHeight - 50);
let dx = 0.6;
let dy = 0.6;

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
