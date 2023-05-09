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
  description.innerHTML = 'Neo este o poveste românească, începe cu a fost odată și continuă cu lupta contra fricii drobului de sare. Acel drob în spatele căruia stă o reală frică de a acţiona, care ne transformă, uneori, în contemplatori ai lui şi nu invers. Nouă însă ne place să credem că drobul de sare este un început. Nu ne este teama de el, ci din contra, ne-a devenit prieten, şlefuit din drob într-un cristal luminos de sare. Aşadar "cristalul de sare" al teritoriul românesc este laitmotivul manifesto-ului NOUA...Îl găsiţi şi în sigla noastră.';
  main.appendChild(description);

  content.appendChild(main);
}

export default about;