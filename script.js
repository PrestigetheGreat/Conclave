const video = document.getElementById('bg-video');
if (video) {
  video.muted = true;
  video.play().catch(() => {});
}

const ticketsBgVideo = document.querySelector('.tickets-video-container video');
if (ticketsBgVideo) {
  ticketsBgVideo.muted = true;
  ticketsBgVideo.play().catch(() => {});
}

window.addEventListener('click', function() {
  if (video) video.play();
  if (ticketsBgVideo) ticketsBgVideo.play();
}, { once: true });

const ticket = document.getElementById('floating-ticket');
if (ticket) {
  const section = document.getElementById('section-main');
  const sectionHeight = section.offsetHeight;
  const topBoundary = sectionHeight * 0.06;
  const bottomBoundary = sectionHeight - (sectionHeight * 0.32);
  const leftBoundary = 10;
  const rightBoundary = window.innerWidth - 120;

  let x = Math.random() * (rightBoundary - leftBoundary) + leftBoundary;
  let y = topBoundary + Math.random() * (bottomBoundary - topBoundary - 30);
  let dx = 0.8;
  let dy = 0.8;

  function moveTicket() {
    x += dx;
    y += dy;
    if (x <= leftBoundary || x >= rightBoundary) dx *= -1;
    if (y <= topBoundary || y >= bottomBoundary - 30) dy *= -1;
    ticket.style.left = x + 'px';
    ticket.style.top = y + 'px';
    requestAnimationFrame(moveTicket);
  }

  moveTicket();
}

const cards = document.querySelectorAll('.card');
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

cards.forEach(card => {
  card.addEventListener('touchstart', function(e) {
    if (!isTouchDevice()) return;
    e.preventDefault();
    e.stopPropagation();
    const isActive = this.classList.contains('active');
    cards.forEach(c => c.classList.remove('active'));
    if (!isActive) this.classList.add('active');
  }, { passive: false });
});

document.addEventListener('touchstart', function(e) {
  if (!e.target.closest('.card')) {
    cards.forEach(c => c.classList.remove('active'));
  }
});
