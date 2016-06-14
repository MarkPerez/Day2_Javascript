//Event Listener

window.addEventListener('load', activate, false);

var text = "";
var counter = 1;
function activate(){
    do {
        text += "The number is " + counter + "<br>";
        counter++;
    } 
    while (counter <= 10);
    document.getElementById("demo").innerHTML = text;

}


    

