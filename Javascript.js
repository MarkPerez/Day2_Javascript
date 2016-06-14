//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click', whatIsTheDay, false);

var today = new Date();

function whatIsTheDay(){
 
    var day = "";
        
    switch (today.getDay()) {
        case 0:
           day = "Sunday"
            break;
            
        case 1:
           day = "Monday"
             break;
            
        case 2:
           day = "Tuesday"
             break;
             
        case 3:
           day = "Wednesday"
             break;
        
        case 4:
           day = "Thursday"
             break;
            
        case 5:
           day = "Friday"
             break;
             
        case 6:
           day = "Saturday"
             break; 
 
    }
 
    document.getElementById("demo").innerHTML = "The day is " + day;
}

var event2 = document.getElementById("button2");
event2.addEventListener('click', whatIsTheTime, false);
    
function whatIsTheTime(){
    
    var time = today.toLocaleTimeString();
    
    document.getElementById("demo").innerHTML = "The time is " + time;

}


    

