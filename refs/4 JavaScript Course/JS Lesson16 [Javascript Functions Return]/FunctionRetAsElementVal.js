
/* global alert */
// Function Return As Element Value:



function process() {

    var pass = prompt("Press Any key to start the [Set Function Return as Element Value] Application ");
    
    if ( pass != "" ) {
        alert("Welcome to Set Fun Ret Applicaton ...");    
        
        function userInfo() {
            var name = prompt("Enter your Name: "),
            age =  prompt("Enter your Age: "),
            country =  prompt("Enter your Address: ");
            
            return "Welcome " + name + "<br>" + "Your Age is = " + age + "<br>" + "Your Country is : " + country; 
        }        
        document.getElementById("FuntionReturnElementV").innerHTML = userInfo();            
    
    } else {
        alert ("Good Bye!");
    }            
}
