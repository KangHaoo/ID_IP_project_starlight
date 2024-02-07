document.addEventListener("DOMContentLoaded", function () { 
    // Hide the loading animation initially 
    const loadingAnimation = document.getElementById("loadingAnimation"); 
    loadingAnimation.style.display = "none"; 
   
    // Simulate a loading process 
    simulateLoading(); 
  }); 
   
  async function simulateLoading() { 
    // Show the loading animation 
    const loadingAnimation = document.getElementById("loadingAnimation"); 
    loadingAnimation.style.display = "block"; 
   
    try { 
        // Simulate an asynchronous task (e.g., fetching data) 
        await fetchData(); 
   
        // Hide the loading animation when the task is complete 
        loadingAnimation.style.display = "none"; 
    } catch (error) { 
        console.error("Error:", error); 
   
        // Handle errors and hide the loading animation 
        loadingAnimation.style.display = "none"; 
    } 
  } 
   
  async function fetchData() { 
    // Simulate an asynchronous task (e.g., fetching data) 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            // Simulate a successful response 
            resolve(); 
        }, 2000); // Adjust the duration as needed 
    }); 
  } 
  