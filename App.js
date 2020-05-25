var app= angular.module("AngularApp",[]);

function onLoad() {
    
    document.getElementById("timestamp").innerHTML = Date();
}
function checkNumber() {

    var theNumber, theMessage;

    theNumber = document.getElementById("smallnumber").value;

    //If x is Not a Number or less than 10 digits
    if(isNaN(theNumber) || theNumber < 01000000000 ) {
        theMessage = "Number was expected to be atleast 10 digits";
    }else {
        theMessage = "Thank you! You will be added shortly";
    }
    document.getElementById("numberMessage").innerHTML = theMessage;
}