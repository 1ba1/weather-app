export default (error) => {
  const errorDiv = document.getElementById('errorMessage');
  errorDiv.textContent = error;
  setTimeout(() => {
    errorDiv.textContent = '';
  }, 2000);
};
