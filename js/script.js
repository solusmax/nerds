'use strict';

//////////////////////////
//                      //
//    УДАЛЕНИЕ NO-JS    //
//                      //
//////////////////////////

document.querySelector(".no-js").classList.remove("no-js");

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
  writeUsModalWindow.classList.remove('modal__window--error');
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

    writeUsModalWindow.classList.remove('modal__window--error');
    void writeUsModalWindow.offsetWidth;
    writeUsModalWindow.classList.add('modal__window--error');
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
  const sliderControl1         = document.querySelector('.promo__control-button--button-1');
  const sliderControl2         = document.querySelector('.promo__control-button--button-2');
  const sliderControl3         = document.querySelector('.promo__control-button--button-3');
  const sliderSlide1           = document.querySelector('.promo__slide--slide-1');
  const sliderSlide2           = document.querySelector('.promo__slide--slide-2');
  const silderSlide3           = document.querySelector('.promo__slide--slide-3');

  sliderControl1.addEventListener('click', function(evt) {
    evt.preventDefault;

    sliderControl1.classList.add('promo__control-button--current');
    sliderControl2.classList.remove('promo__control-button--current');
    sliderControl3.classList.remove('promo__control-button--current');

    sliderSlide1.classList.add('promo__slide--current');
    sliderSlide2.classList.remove('promo__slide--current');
    silderSlide3.classList.remove('promo__slide--current');
  });

  sliderControl2.addEventListener('click', function(evt) {
    evt.preventDefault;

    sliderControl1.classList.remove('promo__control-button--current');
    sliderControl2.classList.add('promo__control-button--current');
    sliderControl3.classList.remove('promo__control-button--current');

    sliderSlide1.classList.remove('promo__slide--current');
    sliderSlide2.classList.add('promo__slide--current');
    silderSlide3.classList.remove('promo__slide--current');
  });

  sliderControl3.addEventListener('click', function(evt) {
    evt.preventDefault;

    sliderControl1.classList.remove('promo__control-button--current');
    sliderControl2.classList.remove('promo__control-button--current');
    sliderControl3.classList.add('promo__control-button--current');

    sliderSlide1.classList.remove('promo__slide--current');
    sliderSlide2.classList.remove('promo__slide--current');
    silderSlide3.classList.add('promo__slide--current');
  });
};
