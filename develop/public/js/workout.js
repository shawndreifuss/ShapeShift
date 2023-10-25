const submitbtn = document.querySelector('#submitBtn')

const workoutPostHandler = async (event) => {
    event.preventDefault();

    const categoryElement = document.querySelector('#category').value.trim();
    const repsElement = document.querySelector('#reps').value.trim();
    const setsElement = document.querySelector('#sets').value.trim();
    const distanceElement = document.querySelector('#distance').value.trim();
    const durationElement = document.querySelector('#duration').value.trim();
    const detailsElement = document.querySelector('#details').value.trim();
    const date = document.querySelector('#date').value.trim();
    
    const bodyData = {
        category: categoryElement,
        reps: repsElement,
        sets: setsElement,
        duration: durationElement,
        distance: distanceElement,
        details: detailsElement,
        date: date
    };

    if (categoryElement && date && detailsElement) {
        console.log("made it in here")
        // Send a POST request to the API endpoint
        const response = await fetch('/api/workouts/post', {
          method: 'POST',
          body: JSON.stringify(bodyData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/workouts');
          } else {
            alert("Please fill form correctly");
          }
        }
      };


submitbtn.addEventListener('click', workoutPostHandler);