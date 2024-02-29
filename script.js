document.getElementById('fleeing-button').addEventListener('click', function() {
  var fleeingButton = document.getElementById('fleeing-button');
  var randomX = Math.random() * (window.innerWidth - fleeingButton.offsetWidth);
  var randomY = Math.random() * (window.innerHeight - fleeingButton.offsetHeight);

  fleeingButton.style.left = randomX + 'px';
  fleeingButton.style.top = randomY + 'px';
});

document.getElementById('fixed-button').addEventListener('click', function() {
  alert('hooo... I see');
});
