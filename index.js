const APPID = "78ba970c3e51c5fa09ad4fd0ed10feea";

const addToDOM = data => {
  const main = document.getElementById("main");

  // cleanup before adding a new location
  [...main.children].forEach(child => {
    main.removeChild(child);
  });

  const name = document.createElement("h1");
  const weather = document.createElement("h2");
  const icon = document.createElement("img");
  const temp = document.createElement("div");

  name.textContent = data.name;
  weather.textContent = data.weather[0].main;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  temp.textContent = data.main.temp;

  [name, weather, icon, temp].forEach(element => {
    main.appendChild(element);
  });
};

const fetchData = e => {
  e.preventDefault();

  const form = document.querySelector("form");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      form.search.value
    }&appid=${APPID}`
  )
    .then(response => {
      if (response.ok) return response.json();
      else throw Error(`City Not Found`);
    })
    .then(data => addToDOM(data))
    .catch(err => {
      const errorDiv = document.getElementById("errorMessage");
      errorDiv.textContent = err;
      setTimeout(() => {
        errorDiv.textContent = "";
      }, 2000);
    });

  // cleanup form
  form.search.value = "";
};

const searchButton = document.querySelector("button");
searchButton.addEventListener("click", fetchData, false);