import toggleTemperature from './toggleTemperature';

export default (data) => {
  const main = document.getElementById('main');
  main.classList.add('main-styles');

  // cleanup before adding new information to main div
  [...main.children].forEach((child) => {
    main.removeChild(child);
  });

  const name = document.createElement('h1');
  const weather = document.createElement('h2');
  const icon = document.createElement('img');
  const temp = document.createElement('div');
  const humidity = document.createElement('p');
  const pressure = document.createElement('p');

  name.textContent = data.name;
  weather.textContent = data.weather[0].description;
  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temp.textContent = `${data.main.temp} F°`;
  temp.addEventListener('click', toggleTemperature, false);
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  pressure.textContent = `Pressure: ${data.main.pressure} hPa`;

  [name, weather, icon, temp, humidity, pressure].forEach((element) => {
    main.appendChild(element);
  });
};
