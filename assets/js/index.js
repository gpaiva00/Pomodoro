const pie = document.querySelector('.pie')
const actions = document.querySelector('.actions')
const segments = pie.children
let count = 0;
var countInterval = null;

function updateSegment() {

  if(count === 100) clearInterval(countInterval);
  // const idx = [...actions.children].indexOf(e.target)
  const key = 'value';
  const toUpdate = segments[0];
  toUpdate.style.setProperty(`--${key}`, count++);

  if(count > 50) toUpdate.style.setProperty('--over50', 1);
}

function start() {
  countInterval = setInterval(updateSegment, 100);
}
