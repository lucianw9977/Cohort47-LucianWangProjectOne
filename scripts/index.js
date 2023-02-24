const hamburgerButton = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav1 ul');

hamburgerButton.addEventListener('click', () => {
  if (window.innerWidth <= 820 && window.innerWidth >= 320) {
    navList.classList.toggle('nav-open');
  }
});

