document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('h1');
  if (title) {
    title.style.opacity = 0;
    title.style.transform = 'translateY(40px) scale(0.95)';
    setTimeout(() => {
      title.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)';
      title.style.opacity = 1;
      title.style.transform = 'translateY(0) scale(1)';
    }, 200);
  }
}); 