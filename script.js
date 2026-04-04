const video = document.getElementById('bg-video');

if (video) {
  video.muted = true;
  video.play().catch(function() {
    console.log('Autoplay blocked');
  });

  window.addEventListener('click', function() {
    video.play();
  }, { once: true });
}

const ticket = document.getElementById('floating-ticket');

if (ticket) {
  const topBoundary = window.innerHeight * 0.06;
  const bottomBoundary = window.innerHeight - (window.innerHeight * 0.32);
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
