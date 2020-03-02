const breakValue = document.getElementById('breakValue'),
      workingValue = document.getElementById('workingValue'),
      pieSegment = document.getElementById('pieSegment'),
      startButton = document.getElementById('startButton'),
      restartButton = document.getElementById('restartButton'),
      breakTile = document.getElementById('breakTile'),
      workingTile = document.getElementById('workingTile');

var currentStatus = {}
  
function start() {
  if (!('status' in currentStatus)) {
    console.log('setting initial status');
    
    currentStatus.status = 'working';
    currentStatus.time = Number(workingValue.value);
  }

  // console.log({ status: currentStatus.status, time: currentStatus.time });

  // calc interval pie animation
  pieCalc = calculatePieAnimation(currentStatus.time);
  
  startTimer();
  startPie();
  setActiveTile(currentStatus.status);
  alternateFavIcon(currentStatus.status);
  toggleDisable(startButton);
}

function restart() {
  restartPie();
  restartTimer();
  restartStatus();
  toggleDisable(startButton);
  alternateFavIcon();
}
      
function setActiveTile(status) {
  restartStatus();

  if (status === 'break') breakTile.classList.add('active-tile');
  else workingTile.classList.add('active-tile');
}

function restartStatus() {
  workingTile.classList.remove('active-tile');
  breakTile.classList.remove('active-tile');
}

function alternateStatus() {
  restart();

  const nextStatus = currentStatus.status === 'break' ? 'working' : 'break';
  const nextStatusTime = nextStatus === 'break' ? breakValue.value : workingValue.value;
  
  currentStatus.status = nextStatus;
  currentStatus.time = Number(nextStatusTime);

  start();
}

function toggleDisable(element) {
  element.disabled = !element.disabled
}

function alternateFavIcon(status = 'default') {
  const headLinks = document.getElementsByTagName('head')[0].children;
  const favLinks = Array.from(headLinks).filter(link => link.classList.contains('favIcon'))

  switch(status) {
    case 'break':
      favLinks.forEach(link => link
        .setAttribute('href', 'assets/img/mugFav/apple-touch-icon.png'));
      break;
    case 'working':
      favLinks.forEach(link => link
        .setAttribute('href', 'assets/img/laptopFav/apple-touch-icon.png'));
      break;
    default:
      favLinks.forEach(link => link
        .setAttribute('href', 'assets/img/laptopFav/apple-touch-icon.png'));
      break;
  }
}
