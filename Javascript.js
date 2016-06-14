//Event Listener
window.addEventListener('load', activate, false);

function activate(){
 
var text = "";
    
    for (var i = 0; i < 50; i++) {
        text += (i+1) + "<br>";        
    }

document.getElementById("demo").innerHTML = text; 

}


    

