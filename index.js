// With the power of chat gpt 
// this button will hopefully work!

// With the power of chat gpt 
// this button will hopefully work!

var startTime = 8.45;
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
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
    return timeLeft + " hours";
  } else {
    var minutesLeft = Math.round(timeLeft * 60);
    return minutesLeft + " minutes";
  }
}

function schoolTimeCalc() {
  if (currentTime < startTime) {
    return "School hasn't started yet";
  }

  for (let i = 0; i < periods.length; i++) {
    if (currentTime < periods[i].time) {
      return "You are in " + periods[i].name + ". " + timeUntilDone(periods[i].time - currentTime) + " left.";
    }
  }

  if (currentTime >= periods[periods.length - 1].time) {
    return "You are not even in school, it's over";
  }
}