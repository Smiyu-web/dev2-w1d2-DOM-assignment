const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.right = `${height}px`
  btn.style.bottom = `${width}px`
})