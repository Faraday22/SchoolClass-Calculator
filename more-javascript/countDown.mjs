// this file is in beta




var date = new Date();

var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();


var timeToCount = 0;


function countDown(){
    // while less than or equal to
    if (timeToCount <= 10){
        alert("Time till free: " + timeToCount);
        timeToCount++;
        // delays by one second
        setTimeout(countDown, 1000);
    }
}

export function checkTime(){
    if(hour > 15){
        console.log("To late");
        return; 
    }
    else if(hour <= 15 && minute < 39){
        console.log("To early");
        return;
    } else{
        while (hour === 15 && minute === 39 && second >= 50) {
            countDown();
        }
    }
}
