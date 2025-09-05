// Simple JS for demonstration (optional)
document.querySelector('h1').addEventListener('mouseenter', function() {
  this.classList.add('animate__pulse');
});
document.querySelector('h1').addEventListener('animationend', function() {
  this.classList.remove('animate__pulse');
});
