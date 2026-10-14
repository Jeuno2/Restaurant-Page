// Home Module
import imageRes from './restaurant.png';

export function home() {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // create and append h1 element
  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to That Little Italian Joint, JS Version';
  content.appendChild(h1);

  // create and append img element
  const image = document.createElement('img');
  image.classList.add('image');
  image.src = imageRes;
  content.appendChild(image);

  // create and append p element
  const p = document.createElement('p');
  content.appendChild(p);
  p.textContent =
    'That Little Italian Joint has the best Italian food one could ever find. Book your party with us today and explore a wide array of delicious entrees for any occasion.';
}
