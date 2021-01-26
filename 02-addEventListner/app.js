const btn = document.querySelector('button');
const title = document.querySelector('h1')


btn.addEventListener('click', function() {
  // alert("CLICKED");
  title.style.color = 'purple';

})


btn.addEventListener('click', function(){
  // alert("CLICKED");
  title.style.backgroundColor = 'red';

})

btn.addEventListener('mouseover', function(){
  // alert("CLICKED");
  title.style.backgroundColor = 'yellow';
})

btn.addEventListener('mouseout', function(){
  // alert("CLICKED");
  title.style.backgroundColor = 'pink';
})