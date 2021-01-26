const form = document.querySelector('#tweetForm')

const user = document.querySelector('#id');
const tweet = document.querySelector('#tweet');

const ul = document.querySelector('ul');
const li = document.createElement('li');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  li.innerHTML = this.user.value + "<br>" + this.tweet.value;
  ul.appendChild(li);
});
