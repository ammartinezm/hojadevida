// Obtener todos los elementos <h3> dentro de <li> y agregar un evento clic
const jobTitles = document.querySelectorAll('li > h3');
jobTitles.forEach((title) => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
  });
});
