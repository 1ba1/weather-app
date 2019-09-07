export default (e) => {
  const div = e.target;
  const temp = div.textContent.split(' ')[0];
  if (div.textContent.indexOf('F') > -1) {
    div.textContent = `${Math.round((((+temp - 32) * 5) / 9) * 100) / 100} C°`;
  } else {
    div.textContent = `${Math.round((((+temp * 9) / 5) + 32) * 100) / 100} F°`;
  }
};
