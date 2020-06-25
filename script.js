var textAnim = function(){
  var c3 = document.querySelector('.c3');
  var c4 = document.querySelector('.c4');
  var c3Position = c3.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.2;
  console.log(c3, c4, c3Position, screenPosition);
  if (c3Position < screenPosition) {
    c3.classList.add('text-appear');
    c4.classList.add('text-appear');
  } else {
    c3.classList.remove('text-appear');
    c4.classList.remove('text-appear');
  };
};

window.addEventListener('scroll', textAnim);
