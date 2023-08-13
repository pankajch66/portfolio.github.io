const ul = document.querySelector('.ul');
const menu = document.querySelector('.humberger');

menu = document.addEventListener('click', function(){
    ul.classList.toggle('active');
});