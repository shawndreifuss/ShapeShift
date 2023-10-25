

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