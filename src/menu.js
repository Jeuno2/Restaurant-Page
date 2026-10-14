// Menu Module
export function menu() {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // create and append h1 element
  const h1 = document.createElement('h1');
  h1.textContent = 'Browse Our Menu!';
  content.appendChild(h1);

  // creating and appending menu items
  const list = document.createElement('ul');
  const lobster = document.createElement('li');
  lobster.textContent = 'Lobster Bisque';
  const fettucini = document.createElement('li');
  fettucini.textContent = 'Fettucini Alfredo';
  const eggplantParm = document.createElement('li');
  eggplantParm.textContent = 'Eggplant Parmesean';
  const spaghetti = document.createElement('li');
  spaghetti.textContent = 'Spaghetti and Meatballs';
  const mediterreanSalad = document.createElement('li');
  mediterreanSalad.textContent = 'Mediterrean Salad';

  list.appendChild(lobster);
  list.appendChild(fettucini);
  list.appendChild(eggplantParm);
  list.appendChild(spaghetti);
  list.appendChild(mediterreanSalad);

  content.appendChild(list);
}
