let about = () => {
  let content = document.getElementById('content');

  let about = document.getElementById('about');
  about.classList.add('active');

  let main = document.createElement('div')
  main.classList.add('main');
  main.setAttribute('id', 'about');

  let title = document.createElement('h2');
  title.innerHTML = 'Discover Romania through your taste buds.'
  main.appendChild(title);

  let description = document.createElement('p');
  description.innerHTML = 'Neo is a Romanian story, it starts with once upon a time and continues with the fight against the fear of the salt droplet. That drob behind which lies a real fear of acting, which sometimes turns us into its beholders and not the other way around. But we like to think of the salt cube as a beginning. We are not afraid of it; on the contrary, it has become our friend, polished from the droplet into a luminous crystal of salt. So the "salt crystal" of the Romanian territory is the motto of the NOUA manifesto...';
  main.appendChild(description);

  content.appendChild(main);
}

export default about;