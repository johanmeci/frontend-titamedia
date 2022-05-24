console.log('load script');
const btnMenu = document.querySelector('#iconMenu');
const navbar = document.querySelector('#navbar');

btnMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
  navbar.classList.toggle('active');
});