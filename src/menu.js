let menu = () => {
  let content = document.getElementById('content');

  let menu = document.getElementById('menu');
  menu.classList.add('active');

  let main = document.createElement('div')
  main.classList.add('main');
  main.setAttribute('id', 'menu');

  let title = document.createElement('h2');
  title.innerHTML = 'Menu:'
  main.appendChild(title);

  let description = document.createElement('p');
  description.innerHTML = 'Soup';
  main.appendChild(description);

  content.appendChild(main);
}

export default menu;