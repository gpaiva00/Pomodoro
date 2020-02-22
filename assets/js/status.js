const statusContainer = document.getElementById('statusContainer');
const statusChildren = statusContainer.children;
let statusActive = 0;
// var statusInterval = null;

function handleChangeStatus() {
  // console.log(statusChildren);
  Array.from(statusChildren).forEach(e => e.classList.toggle('active-tile'))
  // statusChildren.forEach(e => e.classList.toggle('active-tile'));
}

function start() {
  statusInterval = setInterval(handleChangeStatus, 2000)
}

// start();
