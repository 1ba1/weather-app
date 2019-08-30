import search from './search';
import './css/styles.css';
import './css/style.css';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  search(e.target.search.value);
  e.target.reset();
}, false);
