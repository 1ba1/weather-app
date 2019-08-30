import fetch from './fetch';
import addToDOM from './addToDOM';
import errorHandler from './errorHandler';

const APPID = '78ba970c3e51c5fa09ad4fd0ed10feea';

export default async (value) => {
  const path = `https://api.openweathermap.org/data/2.5/weather?q=${
    value
  }&appid=${APPID}&units=imperial`;
  try {
    const res = await fetch(path);
    if (res.data.error) throw Error('Location Not Found');
    addToDOM(res.data);
  } catch (err) {
    errorHandler(err);
  }
};
