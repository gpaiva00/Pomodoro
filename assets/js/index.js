const pie = document.querySelector('.pie')
const actions = document.querySelector('.actions')
const segments = pie.children
const statusContainer = document.getElementById('statusContainer');
const statusEl = statusContainer.children;
let count = 0;
let statusActive = 0;
var countInterval = null;
var statusInterval = null;

function updateSegment() {

  if(count === 100) clearInterval(countInterval);
  // const idx = [...actions.children].indexOf(e.target)
  const key = 'value';
  const toUpdate = segments[0];
  toUpdate.style.setProperty(`--${key}`, count++);

  if(count > 50) toUpdate.style.setProperty('--over50', 1);
}

function handleChangeStatus() {
  // console.log(statusEl);
  Array.from(statusEl).forEach(e => e.classList.toggle('active-tile'))
  // statusEl.forEach(e => e.classList.toggle('active-tile'));
}

function start() {
  // countInterval = setInterval(updateSegment, 100);
  statusInterval = setInterval(handleChangeStatus, 2000)
}

start();
