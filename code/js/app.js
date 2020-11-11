const checkbox = document.getElementById('checkbox');
const span = document.querySelectorAll('#span-hamburger');

checkbox.addEventListener('click', () => {
  span.forEach(spans => {
    if(checkbox.checked){
    spans.classList.toggle('active');
    spans.classList.remove('close');
  } else {
    spans.classList.toggle('close');
    spans.classList.toggle('active');
  }
  });
})