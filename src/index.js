import './css/styles.css';
import search from './search';

const form = document.querySelector('form');
const searchButton = document.querySelector('button');
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  search(form.search.value);
}, false);
