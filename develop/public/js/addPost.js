
const addPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const image = document.querySelector('#customFile').value.trim();
    const caption = document.querySelector('#post-caption').value.trim();
   console.log(image)
    if (title && caption) {
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, caption }),
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
    .querySelector('#ModalLoginForm')
    .addEventListener('submit', addPostHandler);
  