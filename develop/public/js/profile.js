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

  // Code Below is for the auto complete workout names filter
  
  var workoutNames = [
    "Squats",
    "Push-ups",
    "Deadlifts",
    // Add more workout names
  ];
  

  $(function () {
    var workoutNames = [
      "Squats",
      "Push-ups",
      "Deadlifts",
      // Add more workout names
    ];
  
    $("#tags").autocomplete({
      source: function (request, response) {
        var term = request.term.toLowerCase();
        var filteredWorkouts = workoutNames.filter(function (workout) {
          return workout.toLowerCase().includes(term);
        });
        response(filteredWorkouts);
      },
      minLength: 1,
    });
  });
  