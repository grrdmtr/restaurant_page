import './style.css';
import home from './home.js';
import clear from './clear.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';

home.createPage();

about();

let aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  clear();
  about();
}

let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  clear();
  menu();
}

let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  clear();
  contact();
}
