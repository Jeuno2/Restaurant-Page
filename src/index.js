// importing stylesheet
import './style.css';

import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

home();

const buttons = document.querySelectorAll('.btn');

// tab switching logic
buttons.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.textContent === 'Home') {
      home();
    } else if (element.textContent === 'Menu') {
      menu();
    } else if (element.textContent === 'Contact') {
      contact();
    }
  });
});
