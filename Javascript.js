//Event Listener
window.addEventListener('load', activate, false);

function activate(){

//set for loop text
    var text1 = "";

    //outer for loop
    for (var i = 0; i < 10; i++) {
        
    text1 += "Outer number: " + (i+1) + ": " + "<br>" + "<br>"; 
        
        //inner for loop
        for (var j = 0; j < 10; j++){
            
            text1 += "Inner number: " + (j+1) + "<br>" + "<br>";
            
        } 
   
    }
    
    //print to HTML
    document.getElementById("demo").innerHTML = text1;

}


    

