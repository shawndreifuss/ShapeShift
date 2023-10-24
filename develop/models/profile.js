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
    
    