const checkbox = document.getElementById('checkbox');
const span = document.querySelectorAll('#span-hamburger');
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.navbar-menu');

checkbox.addEventListener('click', () => {
  span.forEach(spans => {
    if(checkbox.checked){
    spans.classList.toggle('active');
    spans.classList.remove('close');
    menu.classList.toggle('open');
    menu.classList.remove('close')
    
  } else {
    spans.classList.toggle('close');
    spans.classList.toggle('active');
    menu.classList.toggle('open');
    menu.classList.toggle('close');
  }
  });
})

document.body.scrollLeft = 0;