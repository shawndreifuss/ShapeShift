const submitbtn = document.querySelector('#submitBtn')

const blogPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const date = document.querySelector('#date').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && date && content) {
        console.log("made it in here")
        // Send a POST request to the API endpoint
        const response = await fetch('/api/blogs/post', {
          method: 'POST',
          body: JSON.stringify({ title, date, content}),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/blogs');
          } else {
            alert("Please fill every form");
          }
        }
      };


submitbtn.addEventListener('click', blogPostHandler);