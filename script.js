const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', function(e){
  e.preventDefault();
  msg.textContent = "Thank you! Your message has been sent.";
  form.reset();
});
