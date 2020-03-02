const pie = document.querySelector('.pie')
const actions = document.querySelector('.actions')
const segments = pie.children
var pieCount = 0;
var pieCalc = 0;
var pieInterval = null;

function updateSegment() {
  pieCount += pieCalc;

  if(pieCount === 100) {
    restartPie();
    return;
  }
  
  const toUpdate = segments[0];
  toUpdate.style.setProperty('--value', pieCount);

  if(pieCount > 50) toUpdate.style.setProperty('--over50', 1);
}

function restartPie() {
  clearInterval(pieInterval);
  segments[0].style.setProperty('--value', 0);
  segments[0].style.setProperty('--offset', 0);
  segments[0].style.setProperty('--over50', 0);

  pieCount = 0;
  pieCalc = 0;
}

function startPie() {
  pieInterval = setInterval(updateSegment, 1000); //intervalSecs
}

function calculatePieAnimation(currentStatusTime) {
  return 100 / (currentStatusTime * 60)
}

// start();
