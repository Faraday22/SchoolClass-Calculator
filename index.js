var startTime = 8.47;
var date = new Date();
var currentTime = date.getHours() + date.getMinutes() / 100;


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

function timeUntilDone(timeLeft: number) {
  timeLeft = Math.round(timeLeft * 100) / 100;
  if (timeLeft > 1) {
    alert("You have " + timeLeft + " hours left");
  } else {
    alert("You have " + timeLeft + " minutes left");
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
