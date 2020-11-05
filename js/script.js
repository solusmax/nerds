'use strict';

//////////////////////////
//                      //
//    УДАЛЕНИЕ NO-JS    //
//                      //
//////////////////////////

document.querySelector('.no-js').classList.remove('no-js');

//////////////////////////
//                      //
//      ПЕРЕМЕННЫЕ      //
//                      //
//////////////////////////

const writeUsLink            = document.querySelector('.contacts__write-us-link');

const writeUsModal           = document.querySelector('.modal');
const writeUsModalWindow     = writeUsModal.querySelector('.modal__window');
const writeUsModalClose      = writeUsModal.querySelector('.modal__close');
const writeUsModalBackground = writeUsModal.querySelector('.modal__background');

const writeUsForm            = writeUsModal.querySelector('.write-us__form');
const writeUsName            = writeUsModal.querySelector('#write-us-name');
const writeUsEmail           = writeUsModal.querySelector('#write-us-email');
const writeUsMessage         = writeUsModal.querySelector('#write-us-message');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

//////////////////////////
//                      //
//     LOCALSTORAGE     //
//                      //
//////////////////////////

try {
  storageName = localStorage.getItem('name');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
};

//////////////////////////
//                      //
//   ОТКРЫТИЕ МОДАЛКИ   //
//                      //
//////////////////////////

writeUsLink.addEventListener('click', function(evt) {
  evt.preventDefault();

  writeUsModal.classList.add('modal--shown');

  if (storageName && storageEmail) {
    writeUsName.value = storageName;
    writeUsEmail.value = storageEmail;
    writeUsMessage.focus();
  } else {
    writeUsName.focus();
  };
});

//////////////////////////
//                      //
//   ЗАКРЫТИЕ МОДАЛКИ   //
//                      //
//////////////////////////

function closeModal() {
  writeUsModal.classList.remove('modal--shown');
  writeUsModalWindow.classList.remove('write-us--error');
};

writeUsModalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  closeModal();
});

writeUsModalBackground.addEventListener('click', function(evt) {
  evt.preventDefault();
  closeModal();
});

window.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    if (writeUsModal.classList.contains('modal--shown')) {
      evt.preventDefault();
      closeModal();
    };
  };
});

//////////////////////////
//                      //
//    ВАЛИДАЦИЯ ФОРМЫ   //
//                      //
//////////////////////////

writeUsForm.addEventListener('submit', function(evt) {
  if (!writeUsName.value || !writeUsEmail.value || !writeUsMessage.value) {
    evt.preventDefault();

    writeUsModalWindow.classList.remove('write-us--error');
    void writeUsModalWindow.offsetWidth;
    writeUsModalWindow.classList.add('write-us--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', writeUsName.value);
      localStorage.setItem('email', writeUsEmail.value);
    };
  };
});

//////////////////////////
//                      //
//        СЛАЙДЕР       //
//                      //
//////////////////////////

if (document.querySelector('.promo')) {
  const sliderControls = document.querySelectorAll('.promo__control-button');
  const sliderSlides   = document.querySelectorAll('.promo__slide');

  function clearActiveClassSlide() {
    for (let i = 0; i < sliderSlides.length; i += 1) {
      sliderSlides[i].classList.remove('promo__slide--current')
    };
  };

  function clearActiveClassPagination() {
    for (let i = 0; i < sliderControls.length; i += 1) {
      sliderControls[i].classList.remove('promo__control-button--current')
    };
  };

  for (let i = 0; i < sliderControls.length; i += 1) {
    sliderControls[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      clearActiveClassSlide();
      clearActiveClassPagination();

      sliderControls[i].classList.add('promo__control-button--current');
      sliderSlides[i].classList.add('promo__slide--current');
    });
  };
};
