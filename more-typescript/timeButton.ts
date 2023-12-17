// import { halfDayPeriods } from "halfDayScript"; 
var timeLeft : number;
var startTime = 8.47;
var date = new Date();


/*
* Prepairing to make weekend make school active false
*/
var isWeekend = date.getDay() === 0 || date.getDay() === 6;


var currentTime = date.getHours() + date.getMinutes() / 100;
//var IsWeekend = date.getDay;
var endOfAdvisory : number = 9.11;
var endOfSecond : number = 9.57;
var endOfThird  : number = 10.48;
var endOfFourth : number = 11.39;
var endOfFifth : number = 12.30;
var endOfLunch : number = 13.05;
var endOfSixth  : number = 13.56;
var endOfSeventh  : number = 14.47;
var endOfEigth  : number = 15.40;
var endOfSchool  : number = 15.40;
var schoolActive : boolean | undefined;


function tellTime(){
    if (timeLeft >= 1){
        // to fixed just rounds the decimals
        alert("There is: " + timeLeft.toFixed(2) + " hours(s) left");
    } else if(timeLeft < 1){
        alert("There is: " + timeLeft.toFixed(2) + " minute(s) left");
    }
}


// is school active / has it started
if (currentTime >= startTime && currentTime < endOfSchool) {
    schoolActive = schoolActive === null ? true : schoolActive;
}
else if (currentTime > endOfSchool) {
    schoolActive = schoolActive === null ? false : schoolActive;
}
else {
    console.log("How tf was this printed??");
}
function isAdvistory() {
    if (currentTime >= startTime && currentTime < endOfAdvisory) {
        alert("Your in advisory");
        timeLeft = 9.11 - currentTime;
        tellTime();
        return;
    }
}
function isSecond() {
    if (currentTime >= endOfAdvisory && currentTime < endOfSecond) {
        alert("Your in second period");
        timeLeft = endOfSecond - currentTime;
        tellTime();
        return;
    }
}
function isThird() {
    if (currentTime >= endOfSecond && currentTime < endOfThird) {
        alert("Your in third period");
        timeLeft = endOfThird - currentTime;
        tellTime();
        return;
    }
}
function isFourth() {
    if (currentTime >= endOfThird && currentTime < endOfFourth) {
        alert("Your in fourth period");
        timeLeft = endOfFourth - currentTime;
        tellTime();
        return;
    }
}
function isFifth() {
    if (currentTime >= endOfFourth && currentTime < endOfFifth) {
        alert("Your in fifth period");
        timeLeft = endOfFifth - currentTime;
        tellTime();
        return;
    }
}
function isLunch() {
    if (currentTime >= endOfFifth && currentTime < endOfLunch) {
        const easteregg = Math.floor(Math.random() * 100) + 1;
        if (easteregg == 52) {
            alert("Your in munchy munch time");
        }
        else {
            alert("Your at lunch");
        }
        timeLeft = endOfSixth - currentTime;
        tellTime();
        return;
    }
}
function isSixth() {
    if (currentTime >= endOfLunch && currentTime < endOfSixth) {
        alert("Your in sixth period");
        timeLeft = endOfSixth - currentTime;
        tellTime();
        return;
    }
}
function isSeventh() {
    if (currentTime >= endOfSixth && currentTime < endOfSeventh) {
        alert("Your in seventh period");
        timeLeft = endOfSeventh - currentTime;
        tellTime();
        return;
    }
}
function isEigth() {
    if (currentTime >= endOfSeventh && currentTime < endOfEigth) {
        alert("Your in eight period");
        timeLeft = endOfEigth - currentTime;
        tellTime();
        return;
    }
}
function isSchoolOver() {
    if (currentTime >= 15.40) {
        alert("Schools has ended");
        schoolActive = false;
        return;
    }
}
function findPeriod() {
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
    if (schoolActive === true) {
        findPeriod();
    }
    else {
        alert("Your not even in school");
    }
}

function updateTime(){
    schoolTimeCalc();
}