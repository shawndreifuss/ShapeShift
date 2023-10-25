 // code below is for the updated time zones// 
 function populateTimezones() {
    const timezonesSelect = document.getElementById("timezones");
    const timezones = Intl.supportedValuesOf("timeZone");

    for (const timezone of timezones ) {
      const option = document.createElement("option");
      option.value = timezone;
      option.textContent = timezone;
      timezonesSelect.appendChild(option);
    }
  }

  window.onload = function() {
    populateTimezones();
  };

  document.getElementById("timezones").addEventListener("change", function() {
    const selectedTimezone = this.value;
    // Perform actions based on the selected timezone, e.g., update the page with timezones as the user changes their time zone.// 
    console.log("Selected Timezone: " + selectedTimezone);
  });
  
  // code below is for switching between tabs //
  document.addEventListener("DOMContentLoaded", function () {
    const tabDataElements = document.querySelectorAll(".upper-body-data");
  
    tabDataElements.forEach(function (element) {
      element.addEventListener("click", function () {
        // Hide all tab content sections
        const tabContent = document.querySelectorAll(".tab-content");
        tabContent.forEach(function (content) {
          content.style.display = "none";
        });
  
        // Determine which tab was clicked and show its content
        const tabId = element.id;
        const tabContentToShow = document.getElementById(tabId + "-content");
        tabContentToShow.style.display = "block";
  
        // Remove the 'focus' class from all tab elements
        tabDataElements.forEach(function (tab) {
          tab.classList.remove("focus");
        });
  
        // Add the 'focus' class to the clicked tab
        element.classList.add("focus");
      });
    });
  });
  

  // this code below is for saving the items inputted to the page

  // JavaScript code to save user input to local storage when using the class "save"

// Get the Save button element by its class
const saveButtons = document.getElementsByClassName('save');

// Loop through all elements with the class "save"
for (const saveButton of saveButtons) {
  // Add a click event listener to each Save button
  saveButton.addEventListener('click', function() {
    // Get user input from the input field(s) you want to save
    // Adjust this part based on your specific input elements
    const userName = document.getElementById('name1').value;
    // ...

    // Check if user input is not empty and save it to local storage
    if (userName.trim() !== '') {
      localStorage.setItem('userName', userName);
      // ...

      alert('Data saved successfully.');
    } else {
      alert('Please enter a name before saving.');
    }
  });
}

// Check if data exists in local storage when the page loads
window.addEventListener('load', function() {
  const savedUserName = localStorage.getItem('userName');
  // ...
  // Populate input fields or elements with the saved data
  // ...
});

// JavaScript code to save user input to local storage when using the class "save"

// Function to save user input to local storage
function saveUserData() {
  // Get user input from the input field(s) you want to save
  // Adjust this part based on your specific input elements
  const userName = document.getElementById('name1').value;
  // ...

  // Check if user input is not empty and save it to local storage
  if (userName.trim() !== '') {
    localStorage.setItem('userName', userName);
    // ...

    alert('Data saved successfully.');
  } else {
    alert('Please enter a name before saving.');
  }
}