
window.addEventListener('wheel', (event) => {
  // Si la rueda va hacia arriba (scroll negativo)
  if (event.deltaY < 0) {
    scrollSearchBar.classList.add('show');
  } 
  // Si la rueda va hacia abajo (scroll positivo)
  else if (event.deltaY > 0) {
    scrollSearchBar.classList.remove('show');
  }
});
