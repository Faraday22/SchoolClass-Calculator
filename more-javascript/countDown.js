// This file is in the works and hasn't been called yet

// This file is not production ready nor test basically

var date = new Date();
// trying to find out what this labels 3:39:50 as
var time = date.getHours() + date.getMinutes() + date.getSeconds() / 100;

var timeToCount = 0;

var sleepOne = setTimeout(1000);

function countDown(){
    // while less than or equal to
    while (timeToCount <= 10){
        alert("Time till free: " + timeToCount);
        timeToCount++;
        sleepOne;        
    } 
}

// replace this with correct time
var formatedTime = 15 + ":" + 59 + ":" + 50;

console.log(formatedTime);
console.log(time)

if (time = formatedTime){
    countDown;
} else {
    return;
}
