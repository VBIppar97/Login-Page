//Disable back page
function disableForwardButton() 
{
    window.history.forward();
}
function preventBack() {
    window.history.forward();
}
// Call the function on page load and on pageshow event
window.onload = disableForwardButton;
window.onpageshow = preventBack;

function myfunction()
{
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;
    if (un=="152467"&& pw=="12345")
    {
        alert("called function")
        window.location.href="newpage.html";
        console.log("called next page")
    }
    else
    {    
        alert("Invalid username and password")
    }

}

// use for SEEN UNSEEN PASSWORD
    function see() {

        var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        }
        else {
            x.type = "password"
        }
    }