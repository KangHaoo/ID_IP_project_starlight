//[STEP 0]: Make sure our document is A-OK
document.addEventListener("DOMContentLoaded", function () {
  console.log("test");
  // What kind of interface we want at the start 
  const APIKEY = "65960b491332103119c9f0d0";

  //[STEP 7]: Create our AJAX settings
  let settings = {
    method: "GET", //[cher] we will use GET to retrieve info
    headers: {
      "Content-Type": "application/json",
      "x-apikey": APIKEY,
      "Cache-Control": "no-cache"
    },
  }


  document.getElementById("Sign_in").addEventListener("click", function (e) {
    //[STEP 8]: Make our AJAX calls
    // Once we get the response, we modify our table content by creating the content internally. We run a loop to continuously add on data
    // RESTDb/NoSql always adds in a unique id for each data; we tap on it to have our data and place it into our links 
    fetch("https://interactivedev-0583.restdb.io/rest/ipproject", settings)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let content = "";

        let contactEmail = document.getElementById("login-email").value;
        let contactPassword = document.getElementById("password-input").value;
        // Assuming 'response' is an array
        for (var i = 0; i < response.length; i++) {
          // Do something with each item in the response
          console.log(response[i]); 
          const email = response[i]["signup-email"];
          const password = response[i]["signup-password"];  
          if (contactEmail == email && contactPassword == password) {
            window.location.href = "index.html";  
          }
        }



      });
  });

});
