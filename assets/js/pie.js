const pie = document.querySelector('.pie')
const actions = document.querySelector('.actions')
const segments = pie.children
let count = 0;
var pieInterval = null;

function updateSegment() {

  if(count === 100) {
    restartPie();
    return;
  }
  // const idx = [...actions.children].indexOf(e.target)
  const key = 'value';
  const toUpdate = segments[0];
  toUpdate.style.setProperty(`--${key}`, count++);

  if(count > 50) toUpdate.style.setProperty('--over50', 1);
}

function restartPie() {
  clearInterval(pieInterval);
  segments[0].style.setProperty('--value', 0);
  segments[0].style.setProperty('--offset', 0);
  segments[0].style.setProperty('--over50', 0);
}

function startPie() {
  pieInterval = setInterval(updateSegment, intervalSecs);
}

// start();
