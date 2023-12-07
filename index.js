import { halfDayPeriods } from "./more-javascript/halfDayScript"; 

var timeLeft;
var startTime = 8.47;
var date = new Date();
/*
* Make a new var for date that gives date if weekend
* echo's that the button is useless due to sat/sun day
*/
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

// Making Code Better on time
let schoolActive = null;

function hasSchoolStarted(){
   if (currentTime > startTime) {
    alert("School hasn't started yet");
    schoolActive = false;
    return;
  } else{
   schoolActive = true; 
  } 
}


function isAdvistory(){
    if (currentTime <= periods[0].time){
      alert("Your in " + periods[0].name);
      timeLeft = periods[0].time - currentTime;
      alert("There is: " + timeLeft + " time left");
      return;
    }
    /*
    *  Else statment not needed?
    */
}

function isSecond(){
  if (currentTime > periods.time[0]){
    alert("Your in " + periods[1].name);
    timeLeft = periods[1].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isThird(){
  if (currentTime > periods[1].time){
    alert("Your in " + periods[2].name);
    timeLeft = periods[2].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isFourth(){
 if (currentTime > periods.time[2]){
    alert("Your in " + periods[4].name);
    timeLeft = periods[3].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isLunch(){
 if (currentTime > periods[3].time){
    alert("Your in " + periods[5].name);
    timeLeft = periods[4].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSixth(){
 if (currentTime > periods[4].time){
    alert("Your in " + periods[6].name);
    timeLeft = periods[5].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSeventh(){
 if (currentTime > periods[5].time){
    alert("Your in " + periods[7].name);
    timeLeft = periods[6].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isEigth(){
 if (currentTime > periods[6].time){
    alert("Your in " + periods[8].name);
    timeLeft = periods[7].time - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSchoolOver(){
  if (currentTime > 15.40){
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
  isLunch();
  isSixth();
  isSeventh();
  isEigth();
  isSchoolOver();
}


function schoolTimeCalc() {
  /*
  * Make sure to define what the true and false are for in hasSchoolStarted function
  * The bool is to make the function check if school has started if tru then note that information
  * 
  * It may be helpful or not at the moment I'm not sure
  */
  hasSchoolStarted();
  if (schoolActive == true){
    findPeriod();
  } else {
    return;
  }
}