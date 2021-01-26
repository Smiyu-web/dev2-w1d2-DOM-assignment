const btn = document.querySelector('#click');
const title = document.querySelector('h1');

btn.onclick = () => {
  // console.log("I GOT CLICKED FROM THE APP.JS");
  title.style.color = 'pink';
}

btn.onclick = () => {
  title.style.color = 'purple';
}


function greet() {
  alert('HEY BUDY')
}