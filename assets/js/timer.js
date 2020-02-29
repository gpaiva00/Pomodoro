var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let pastMinutes = 0;
let pastSeconds = 0;
var timerInterval = null;

function setTime() {
  console.log('pastMinutes', pastMinutes);

  if (pastMinutes === currentStatus.time) {
    alternateStatus();
    return;
  }

  ++totalSeconds;

  pastMinutes = parseInt(totalSeconds / 60);
  pastSeconds = totalSeconds % 60;
  const padSeconds = pad(pastSeconds);
  const padMinutes = pad(pastMinutes);

  secondsLabel.innerHTML = padSeconds;
  minutesLabel.innerHTML = padMinutes;

  setPageTitle(`${padMinutes}:${padSeconds} Pomodoro`);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function restartTimer() {
  clearInterval(timerInterval);
  totalSeconds = 0;
  pastMinutes = 0;
  pastSeconds = 0;
  minutesLabel.innerHTML = "00";
  secondsLabel.innerHTML = "00";
}

function startTimer() {
  timerInterval = setInterval(setTime, 1000);
}

function setPageTitle(content) {
  document.title = content;
}