const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row')

navBtn.onclick = function() {
  navIcon.classList.toggle('nav-icon--active')    //добваляем действие на icon  (toggle)
  nav.classList.toggle('header__top-row--mobile')   //появляется меню после нажатие кнопки
  document.body.classList.toggle('no-scroll')
}

