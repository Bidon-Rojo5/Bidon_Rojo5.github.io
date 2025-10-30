const menuBtn= document.getElementById("menuBtn")
const dropdownMenu= document.getElementById("dropdownMenu")

menuBtn.addEventListener('click',()=>{
dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
})
document.addEventListener('click', (event) => {
  if (event.target !== menuBtn && event.target !== dropdownMenu && ! dropdownMenu.contains(event.target))
  {
    dropdownMenu.style.display = none
  }
});