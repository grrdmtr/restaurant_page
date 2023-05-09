let contact = () => {
  let content = document.getElementById('content');

  let contact = document.getElementById('contact');
  contact.classList.add('active');

  let main = document.createElement('div')
  main.classList.add('main');
  main.setAttribute('id', 'contact');

  let title = document.createElement('h2');
  title.innerHTML = 'Contact us:'
  main.appendChild(title);

  let description = document.createElement('p');
  description.innerHTML = 'Bucharest. Lizeanu Street no. 8';
  main.appendChild(description);

  content.appendChild(main);
}

export default contact;