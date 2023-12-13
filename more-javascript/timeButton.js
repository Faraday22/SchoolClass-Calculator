// import { halfDayPeriods } from "halfDayScript"; 
var timeLeft;
var startTime = 8.47;
var date = new Date();
/*
* Make a new var for date that gives date if weekend
* echo's that the button is useless due to sat/sun day
*/
var currentTime = date.getHours() + date.getMinutes() / 100;
//var IsWeekend = date.getDay;
var endOfAdvisory = 9.11;
var endOfSecond = 9.57;
var endOfThird = 10.48;
var endOfFourth = 11.39;
var endOfFifth = 12.30;
var endOfLunch = 13.05;
var endOfSixth = 13.56;
var endOfSeventh = 14.47;
var endOfEigth = 15.40;
var endOfSchool = 15.40;
var schoolActive = null;
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
        // to fixed rounds decimals
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isSecond() {
    if (currentTime >= endOfAdvisory && currentTime < endOfSecond) {
        alert("Your in second period");
        timeLeft = endOfSecond - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isThird() {
    if (currentTime >= endOfSecond && currentTime < endOfThird) {
        alert("Your in third period");
        timeLeft = endOfThird - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isFourth() {
    if (currentTime >= endOfThird && currentTime < endOfFourth) {
        alert("Your in fourth period");
        timeLeft = endOfFourth - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isFifth() {
    if (currentTime >= endOfFourth && currentTime < endOfFifth) {
        alert("Your in fifth period");
        timeLeft = endOfFifth - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
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
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isSixth() {
    if (currentTime >= endOfLunch && currentTime < endOfSixth) {
        alert("Your in sixth period");
        timeLeft = endOfSixth - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isSeventh() {
    if (currentTime >= endOfSixth && currentTime < endOfSeventh) {
        alert("Your in seventh period");
        timeLeft = endOfSeventh - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
        return;
    }
}
function isEigth() {
    if (currentTime >= endOfSeventh && currentTime < endOfEigth) {
        alert("Your in eight period");
        timeLeft = endOfEigth - currentTime;
        alert("There is: " + timeLeft.toFixed(2) + " time left");
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
schoolTimeCalc();
