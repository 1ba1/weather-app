const toggleTemperature = (e) => {
  const div = e.target;
  const temp = e.target.textContent.split(' ')[0];
  if (div.textContent.indexOf('F') > -1) {
    div.textContent = `${Math.round(((+temp - 32) * 5 / 9) * 100) / 100} C°`;
  } else {
    div.textContent = `${Math.round(((+temp * 9 / 5) + 32) * 100) / 100} F°`;
  }
};


const addToDOM = (data) => {
  const main = document.getElementById('main');

  // cleanup before adding new information to main div
  [...main.children].forEach((child) => {
    main.removeChild(child);
  });

  const name = document.createElement('h1');
  const weather = document.createElement('h2');
  const icon = document.createElement('img');
  const temp = document.createElement('div');

  name.textContent = data.name;
  weather.textContent = data.weather[0].main;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temp.textContent = `${data.main.temp} F°`;
  temp.addEventListener('click', toggleTemperature, false);

  [name, weather, icon, temp].forEach((element) => {
    main.appendChild(element);
  });
};

const APPID = '78ba970c3e51c5fa09ad4fd0ed10feea';

const fetchData = (e) => {
  e.preventDefault();

  const form = document.querySelector('form');

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      form.search.value
    }&appid=${APPID}&units=imperial`
  )
    .then((response) => {
      if (response.ok) return response.json();
      throw Error('City Not Found');
    })
    .then(data => addToDOM(data))
    .catch((err) => {
      const errorDiv = document.getElementById('errorMessage');
      errorDiv.textContent = err;
      setTimeout(() => {
        errorDiv.textContent = '';
      }, 2000);
    });

  // cleanup form
  form.search.value = '';
};

const searchButton = document.querySelector('button');
searchButton.addEventListener('click', fetchData, false);
