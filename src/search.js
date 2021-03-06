import fetch from './fetch';
import addToDOM from './addToDOM';
import errorHandler from './errorHandler';

export default async (event) => {
  event.preventDefault();
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${
    event.target.search.value
  }&appid=${process.env.API_KEY}&units=imperial`;
  try {
    const res = await fetch(path);
    if (!res.data) throw Error('Location Not Found');
    addToDOM(res.data);
  } catch (err) {
    errorHandler(err.message);
  }
  event.target.reset();
};
