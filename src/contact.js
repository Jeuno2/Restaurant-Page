// Contact Module
export function contact() {
  const content = document.querySelector('#content');
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  // create and append h1 element
  const h1 = document.createElement('h1');
  h1.textContent = 'How to Contact Us';
  content.appendChild(h1);

  // create div for contact methods
  const contactMethods = document.createElement('div');
  content.appendChild(contactMethods);

  const phoneNum = document.createElement('h2');
  phoneNum.textContent = 'Phone: 555-555-5555';
  contactMethods.appendChild(phoneNum);

  const email = document.createElement('h2');
  email.textContent = 'Email: italianjoint@gmail.com';

  contactMethods.appendChild(email);

  contactMethods.classList.add('contactMethods');
}
