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

  const submitProfile= async function(event){
    event.preventDefault()
    console.log('click')
    const waistEl= document.querySelector('#Waist').value;
    const hipsEl= document.querySelector('#Hips').value;
    const neckEl= document.querySelector('#Neck').value;
    const height1= document.querySelector('#height1').value;
    const height2= document.querySelector('#height2').value;
    const description = document.querySelector('#user-description').value
    const timezones= document.querySelector('#timezones').value;
    const bday= document.querySelector('#b-day').value;
    const byear= document.querySelector('#b-year').value;
    const bmonth=document.querySelector('#b-month').value;




    const res= await fetch('/api/users/createProfile', {
      method: 'POST' ,
      body: JSON.stringify({
        waistEl,hipsEl,neckEl,height1,height2,description,timezones,bday,bmonth,byear,
      }),
      headers:{'Content-Type': application/json}
    })
    if(res.ok){
      document.location.reload()
    } else{
      alert('we blew it')
    }
  }
document.querySelector('#save-button').addEventListener('click', submitProfile)
  

  