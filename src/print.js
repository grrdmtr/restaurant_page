import Background from './restaurant.jpg';

export default {
  topBar() {
    const element = document.createElement('div');
    element.classList.add('top-bar');

    const node1 = document.createElement('div');
    node1.classList.add('about-us');
    let node1Text = document.createTextNode('About us');
    node1.appendChild(node1Text);
    element.appendChild(node1);

    const node2 = document.createElement('div');
    node2.classList.add('menu');
    let node2Text = document.createTextNode('Menu');
    node2.appendChild(node2Text);
    element.appendChild(node2);

    const node3 = document.createElement('div');
    node3.classList.add('contact');
    let node3Text = document.createTextNode('Contact');
    node3.appendChild(node3Text);
    element.appendChild(node3);
    
    return element;
  },

  image() {
    const element = document.createElement('div');

    const background = new Image();
    background.src = Background;

    element.appendChild(background);

    return element;
  },

  main() {
    const element = document.createElement('div');
    element.classList.add('main');

    const node1 = document.createElement('h1');
    node1.classList.add('title');
    let node1Text = document.createTextNode('Romanian. Neo. Cusine.');
    node1.appendChild(node1Text);
    element.appendChild(node1);

    const node2 = document.createElement('p');
    node2.classList.add('description');
    let node2Text = document.createTextNode('Neo este o poveste românească, începe cu a fost odată și continuă cu lupta contra fricii drobului de sare. Acel drob în spatele căruia stă o reală frică de a acţiona, care ne transformă, uneori, în contemplatori ai lui şi nu invers. Nouă însă ne place să credem că drobul de sare este un început. Nu ne este teama de el, ci din contra, ne-a devenit prieten, şlefuit din drob într-un cristal luminos de sare. Aşadar "cristalul de sare" al teritoriul românesc este laitmotivul manifesto-ului NOUA...Îl găsiţi şi în sigla noastră.');
    node2.appendChild(node2Text);
    element.appendChild(node2);

    return element;
  }
}