//Event Listener

window.addEventListener('load', activate, false);

var text = "";
var counter = 1;
function activate(){
    while (counter <= 10) {
        text += "The number is " + counter + "<br>";
        counter++;
    }
    document.getElementById("demo").innerHTML = text;

}


    

