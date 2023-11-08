var startTime = 8.45; // Updated start time to 8.45 in the 24-hour format

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var amOrPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // Convert hours to 12-hour format
var currentTime = hours + minutes / 100;

const periods = [
  { time: 9.11, name: "advisory" },
  { time: 9.57, name: "second period" },
  { time: 10.48, name: "third period" },
  { time: 11.39, name: "fourth period" },
  { time: 12.30, name: "fifth period" },
  { time: 13.05, name: "lunch" },
  { time: 13.56, name: "sixth period" },
  { time: 14.47, name: "seventh period" },
  { time: 15.40, name: "eighth period" }
];

function timeUntilDone(timeLeft) {
  timeLeft = Math.round(timeLeft * 100) / 100;
  if (timeLeft >= 1) {
    alert("You have " + timeLeft + " hours left");
  } else {
    var minutesLeft = Math.round(timeLeft * 60);
    alert("You have " + minutesLeft + " minutes left");
  }
}

function schoolTimeCalc() {
  if (currentTime < startTime) {
    alert("School hasn't started yet");
    return;
  }

  for (let i = 0; i < periods.length; i++) {
    if (currentTime < periods[i].time) {
      alert("You are in " + periods[i].name);
      timeUntilDone(periods[i].time - currentTime);
      break;
    }
  }

  if (currentTime >= periods[periods.length - 1].time) {
    alert("You are not even in school, it's over");
  }
}
