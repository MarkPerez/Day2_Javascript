//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click',activate,false);

var scope = 5

function activate() {
    var scope = parseInt(document.getElementById("input1").value);

    document.getElementById("demo").innerHTML = "The outer scope number is: " + window.scope + "<br>" + "The inner scope number is: " + scope;
    
}
