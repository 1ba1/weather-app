# Weather App

## Summary

With this app, you can search for a location and display data about the weather. You can also toggle the temperature from Fahrenheit to Celsius and vice-versa.

It is built with HTML/CSS/JAVASCRIPT using the [Open Weather Map](https://openweathermap.org/current) API.

## Getting Started

Follow these instructions to get a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites  

This project runs with Node.js and NPM. If you don't have those installed,
follow this
[guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

After installation, run `node -v` to make sure Node.js installed correctly.
```
$ node -v
> v8.16.1
```
Also make sure that NPM is installed by running `npm -v`.
```
$ npm -v
> 6.11.2
```

### Installing  

Fork this repository and then clone it on your local machine.

Run `npm install` to install all project dependencies.

### API Key

In order to be able to fetch data from the API you must sign up to the
[Open Weather Map](https://openweathermap.org/current) website and obtain your personal API key.
Then navigate to `weather-app/src/search.js` file and replace
`process.env.API_KEY` with your newly generated key.

```diff
const path = `https://api.openweathermap.org/data/2.5/weather?q=${
    value
}&appid=${
-  process.env.API_KEY
+ 'your personal api key'
}&units=imperial`;

```
After that, run the following command to create your new `main.js` file:
```
npx webpack
```
### Deploy on Github pages

To deploy the project on gh-pages run the following command:

```
git subtree push --prefix dist origin gh-pages
```

## Future features

* Display loading progress

## Watch it Live

[Live version](https://1ba1.github.io/weather-app/)

## License
This project is licensed under the MIT License.
