let right = document.querySelector('.right');
let left = document.querySelector('.left');

let posRight =right.offsetTop;
let endFix = posRight + right.clientHeight - left.clientHeight;

window.addEventListener('scroll', ()=> {
  let scroll = window.pageYOffset;
  
  if (scroll > posRight) {
    left.querySelector('div').classList.add('fixed');
    if (scroll < endFix ) {
      left.querySelector('div').classList.remove('bottom');
    } else {
      left.querySelector('div').classList.add('bottom');
      left.style.height = right.clientHeight + 'px';
    }
  }
  else {
    left.querySelector('div').classList.remove('fixed');
  }
})
