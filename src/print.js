import Background from './restaurant.jpg';

export default {
  topBar() {
    const element = document.createElement('header');
    element.classList.add('top-bar');

    const about = document.createElement('button');
    about.setAttribute('id','about');
    about.innerHTML = 'About us';
    element.appendChild(about);

    const menu = document.createElement('button');
    menu.setAttribute('id','menu');
    menu.innerHTML = 'Menu';
    element.appendChild(menu);

    const contact = document.createElement('button');
    contact.setAttribute('id','contact');
    contact.innerHTML = 'Contact';
    element.appendChild(contact);
    
    return element;
  }
}