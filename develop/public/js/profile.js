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

// Function to save user input to local storage
function saveUserData() {
  const userName = document.getElementById('name1').value;
  const userEmail = document.getElementById('email-id').value;
  const userGender = document.querySelector('input[name="gender"]:checked').value;
  const userBirthMonth = document.getElementById('b-month').value;
  const userBirthDay = document.getElementById('b-day').value;
  const userBirthYear = document.getElementById('b-year').value;

  // Check if user inputs are not empty and save them to local storage
  if (userName.trim() !== '') {
    localStorage.setItem('userName', userName);
  }

  if (userEmail.trim() !== '') {
    localStorage.setItem('userEmail', userEmail);
  }

  if (userGender) {
    localStorage.setItem('userGender', userGender);
  }

  if (userBirthMonth.trim() !== '') {
    localStorage.setItem('userBirthMonth', userBirthMonth);
  }

  if (userBirthDay.trim() !== '') {
    localStorage.setItem('userBirthDay', userBirthDay);
  }

  if (userBirthYear.trim() !== '') {
    localStorage.setItem('userBirthYear', userBirthYear);
  }

  alert('Data saved successfully.');
}

function populateUserData() {
  const savedUserName = localStorage.getItem('userName');
  const savedUserEmail = localStorage.getItem('userEmail');
  const savedUserGender = localStorage.getItem('userGender');
  const savedUserBirthMonth = localStorage.getItem('userBirthMonth');
  const savedUserBirthDay = localStorage.getItem('userBirthDay');
  const savedUserBirthYear = localStorage.getItem('userBirthYear');

  if (savedUserName) {
    document.getElementById('name1').value = savedUserName;
  }

  if (savedUserEmail) {
    document.getElementById('email-id').value = savedUserEmail;
  }

  if (savedUserGender) {
    document.querySelector(`input[name="gender"][value="${savedUserGender}"]`).checked = true;
  }

  if (savedUserBirthMonth) {
    document.getElementById('b-month').value = savedUserBirthMonth;
  }

  if (savedUserBirthDay) {
    document.getElementById('b-day').value = savedUserBirthDay;
  }

  if (savedUserBirthYear) {
    document.getElementById('b-year').value = savedUserBirthYear;
  }
}

const saveButtons = document.getElementsByClassName('save');

for (const saveButton of saveButtons) {
  saveButton.addEventListener('click', saveUserData);
}

window.addEventListener('load', populateUserData);

