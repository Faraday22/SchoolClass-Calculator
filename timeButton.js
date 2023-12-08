// import { halfDayPeriods } from "./more-javascript/halfDayScript"; 

var timeLeft = null;
var startTime = 8.47;
var date = new Date();
/*
* Make a new var for date that gives date if weekend
* echo's that the button is useless due to sat/sun day
*/
var currentTime = date.getHours() + date.getMinutes() / 100;

//var IsWeekend = date.getDay;

const periods = [
/*0*/ { time: 9.11, name: "advisory" },
/*1*/ { time: 9.57, name: "second period" },
/*2*/ { time: 10.48, name: "third period" },
/*3*/ { time: 11.39, name: "fourth period" },
/*4*/ { time: 12.30, name: "fifth period" },
/*5*/ { time: 13.05, name: "lunch" },
/*6*/ { time: 13.56, name: "sixth period" },
/*7*/ { time: 14.47, name: "seventh period" },
/*8*/ { time: 15.40, name: "eighth period" }
];

var schoolActive = null;
// is school active / has it started
if (currentTime >= periods[8].time){
    schoolActive = schoolActive === null ? false : schoolActive; 
} else if (currentTime >= startTime){
    schoolActive = schoolActive === null ? true : schoolActive; 
} else{
  console.log("How tf was this printed??");
} 

function isAdvistory(){
    if (currentTime <= periods[0].time){
      alert("Your in " + periods[0].name);
      timeLeft = periods[0].time - currentTime;
      alert("There is: " + timeLeft + " time left");
      return;
    }
}

function isSecond(){
  if (currentTime >= periods[0].time){
    alert("Your in " + periods[1].name);
    timeLeft = periods[1].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isThird(){
  if (currentTime >= periods[1].time){
    alert("Your in " + periods[2].name);
    timeLeft = periods[2].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isFourth(){
 if (currentTime >= periods.time[2]){
    alert("Your in " + periods[3].name);
    timeLeft = periods[3].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isFifth(){
 if (currentTime >= periods[3].time){
    alert("Your in " + periods[4].name);
    timeLeft = periods[4].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isLunch(){
  if (currentTime >= periods[4].time){
    alert("Your at " + periods[5].name);
    timeLeft = periods[5] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isSixth(){
 if (currentTime >= periods[5].time){
    alert("Your in " + periods[6].name);
    timeLeft = periods[6].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSeventh(){
 if (currentTime >= periods[6].time){
    alert("Your in " + periods[7].name);
    timeLeft = periods[7].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isEigth(){
 if (currentTime >= periods[7].time){
    alert("Your in " + periods[8].name);
    timeLeft = periods[8].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSchoolOver(){
  if (currentTime >= 15.40){
    alert("Schools has ended");
    schoolActive = false;
    return;
  }
}

function findPeriod(){
  isAdvistory();
  isSecond();
  isThird();
  isFourth();
  isFifth();
  isLunch();
  isSixth();
  isSeventh();
  isEigth();
  isSchoolOver();
}


function schoolTimeCalc() {
  if (schoolActive === true){
    findPeriod();
  } else{
    alert("Your not even in school");
  }
}
