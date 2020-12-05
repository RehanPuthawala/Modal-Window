'use strict';

// *------------------------ DOM Elements Selection *------------------------------ //

const showModalBtns = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// *------------------------ Functions *------------------------------ //

const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const removeModal = e => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// *------------------------ Event Listeners *------------------------------ //

showModalBtns.forEach(modal => modal.addEventListener('click', showModal));
document.addEventListener('click', e => {
  if (
    e.target.classList.contains('close-modal') ||
    e.target.classList.contains('overlay')
  )
    removeModal();
});

document.addEventListener('keyup', e => {
  if (e.key === 'Escape') removeModal();
});
