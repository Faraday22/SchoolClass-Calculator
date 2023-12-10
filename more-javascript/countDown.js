// This file is in the works and hasn't been called yet

// This file is not production ready nor test basically

var date = new Date();
// trying to find out what this labels 3:39:50 as

var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();


var time = date.getHours() + date.getMinutes() + date.getSeconds() / 100;

if (hour > 1){
  var HourT = "Hours ";
} else{
  var HourT = "Hour ";
}

if (minute > 1){
  var MinuteT = "Minutes ";
} else{
  var MinuteT = "Minute ";
}

if (second > 1){
  var SecondT = "Seconds ";
} else{
  var SecondT = "Second ";
}


// may need
// var formatedTime = hour + HourT + minute + MinuteT + second + SecondT;

var timeToCount = 0;

// sleeps / waits one second
var sleepOne = setTimeout(1000);

function countDown(){
    // while less than or equal to
    while (timeToCount <= 10){
        alert("Time till free: " + timeToCount);
        timeToCount++;
        sleepOne;        
    } 
}

export function checkTime(){

    if (hour === 3 && minute === 39 && second === 50) {
        countDown();
    } else {
        checkTime(); 
    }

}
