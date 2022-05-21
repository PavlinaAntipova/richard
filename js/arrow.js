const arrowBtn = document.querySelector('.js-btn-arrow');
const section = document.querySelector('#about');

arrowBtn.addEventListener('click', onArrowBtn);


function onArrowBtn() {
section.scrollIntoView({behavior: "smooth"});
}



