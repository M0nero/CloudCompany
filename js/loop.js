$(foo);
var boxElement = document.querySelector('.upDown');
function foo(){
boxElement.animate([
  {transform: 'translate(0)'},
  {transform: 'translateY(10px)'},
  {transform: 'translateY(-10px)'}
], 1000, foo);
}