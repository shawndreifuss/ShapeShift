

let image = ""


const addPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const caption = document.querySelector('#post-caption').value.trim();
    

    if (title && image && caption) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, image, caption }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(response)
      if (response.ok) {
       location.reload()
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('#submit-post')
    .addEventListener('click', addPostHandler);
  
    var myWidget = cloudinary.createUploadWidget({
      cloudName: 'dde3qjdf8', 
      uploadPreset: 'xrrgpvtr'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          image = result.info.url
        }
      }
    )
    
    document.getElementById("upload_widget").addEventListener("click", function(event){
      event.preventDefault();
        myWidget.open();
      }, false);



      const addWorkoutHandler = async (event) => {
        event.preventDefault();
      
        const category = document.querySelector('#category').value.trim();
        const reps = document.querySelector('#reps').value.trim();
        const sets = document.querySelector('#sets').value.trim();
        const weight = document.querySelector('#weight').value.trim();
        const distance = document.querySelector('#distance').value.trim();
        const duration = document.querySelector('#duration').value.trim();
        const details = document.querySelector('#details').value.trim();
        
    
        if (title && image && caption) {
          const response = await fetch('/api/post/workout', {
            method: 'POST',
            body: JSON.stringify({ category, reps, sets, weight, distance,duration,details }),
            headers: { 'Content-Type': 'application/json' },
          });
      console.log(response)
          if (response.ok) {
           location.reload()
          } else {
            alert(response.statusText);
          }
        }
      };

      document
      .querySelector('#submit-workout')
      .addEventListener('click', addWorkoutHandler);