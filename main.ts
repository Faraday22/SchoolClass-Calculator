// This is v.1 
// Don't even mention the amount
// of nested if's


function schoolTimeCalc(){
    var startTime = 8:47;
    var time : any = null;
    var advisory = 9.11;
    var second = 9.57;
    var third = 10.48;
    var fourth = 11.39;
    var fifth = 12.30;
    var lunch = 13.05;
    var sixth = 13.56;
    var seventh = 14.47;
    var eigth = 15.40;

    time = prompt("What is the current time? (use standard time)");

    if(startTime < time){
        if(time < advisory){
            alert("Your in advisory");
        } else if(time > advisory){
            if(time < second){
                alert("Your in second period");
            
        } else if(time > second){
            if(time < third){
                alert("Your in third period");
            } else if(time > third){
                if(time < fourth){
                    alert("Your in fourth period");
                } else if(time > fourth){
                    if (time < fifth){
                        alert("Your in fifth period");
                    } else if(time > fifth){
                        if (time < lunch){
                            alert("Your in lunch");
                        } else if(time > lunch){
                            if(time < sixth){
                                alert("Your in sixth period");
                            } else if(time > sixth){
                                if(time < seventh){
                                    alert("Your in seventh period");
                                } else if(time > seventh){
                                    if(time < eigth){
                                        alert("Your in eigth period");
                                    } else if(time > eigth){
                                        alert("Your not even in school, its over");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
    } else {
        alert("School hasn't started yet");
    }
}


schoolTimeCalc();
