
//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
    // What kind of interface we want at the start 
    const APIKEY = "65960b491332103119c9f0d0";
    //[STEP 1]: Create our submit form listener
    document.getElementById("Register").addEventListener("click", function (e) {
      // Prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: Let's retrieve form data
      // For now, we assume all information is valid
      // You are to do your own data validation
      let contactEmail = document.getElementById("signup-email").value;
      let contactPassword = document.getElementById("signup-password").value;
  
      //[STEP 3]: Get form values when the user clicks on send
      // Adapted from restdb API
      let jsondata = {
        "signup-email": contactEmail,
        "signup-password": contactPassword,
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        method: "POST", //[cher] we will use post to send info
        headers: {
          "Content-Type": "application/json",
          "x-apikey": APIKEY,
          "Cache-Control": "no-cache"
        },
        body: JSON.stringify(jsondata),
        
      }
  
      //[STEP 5]: Send our AJAX request over to the DB and print response of the RESTDB storage to console.
      fetch("https://interactivedev-0583.restdb.io/rest/ipproject", settings)
        .then(response => response.json())
        .then(data => {
            window.location.href = "login.html";

        });
    });//end click 
  
  
  });
  