// With the power of chat gpt 
// this button will hopefully work!

// With the power of chat gpt 
// this button will hopefully work!

/*
* What the fuck past me
* chat gpt is retarded
* Dont use again
*/


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

// Make alternative file for this half days

/* import this into the next file when starting
*  support half days
*/
const halfDayPeriods = [
  { time: 9.17, name: "second period" },
  { time: 9.50, name: "third period" },
  { time: 10.23, name: "fourth period" },
  { time: 10.56, name: "fifth period" },
  { time: 11.29, name: "lunch" },
  { time: 12.02, name: "sixth period" },
  { time: 12.35, name: "seventh period" },
  { time: 13.10, name: "eighth period" }
  
];


// Making Code Better on time
let schoolActive = null;

function hasSchoolStarted(){
   if (currentTime < startTime) {
    alert("School hasn't started yet");
    schoolActive = false;
    return;
  } else{
   schoolActive = true; 
  } 
}


function isAdvistory(){
    if (currentTime <= periods.time[0]){
      alert("Your in " + periods.name[0]);
      timeLeft = periods.time[0] - currentTime;
      alert("There is: " + timeLeft + " time left");
      return;
    }
    /*
    *  Else statment not needed?
    */
}

function isSecond(){
  if (currentTime > periods.time[0]){
    alert("Your in " + periods.name[1]);
    timeLeft = periods.time[1] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isThird(){
  if (currentTime > periods.time[1]){
    alert("Your in " + periods.name[2]);
    timeLeft = periods.time[2] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  }
}

function isFourth(){
 if (currentTime > periods.time[2]){
    alert("Your in " + periods.name[4]);
    timeLeft = periods.time[3] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isLunch(){
 if (currentTime > periods.time[3]){
    alert("Your in " + periods.name[5]);
    timeLeft = periods.time[4] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSixth(){
 if (currentTime > periods.time[4]){
    alert("Your in " + periods.name[6]);
    timeLeft = periods.time[5] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isSeventh(){
 if (currentTime > periods.time[5]){
    alert("Your in " + periods.name[7]);
    timeLeft = periods.time[6] - currentTime;
    alert("There is: " + timeLeft + " time left");
    return;
  } 
}

function isEigth(){
 if (currentTime > periods.time[6]){
    alert("Your in " + periods.name[8]);
    timeLeft = periods.time[7] - currentTime;
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
  isSchoolOver;
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