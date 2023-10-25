


const addBlogHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const image = document.querySelector('#post-image').value.trim();
    const caption = document.querySelector('#post-content').value.trim();
    console.log(title,image,caption)
    if (title && author && content) {
      const response = await fetch('/api/blogs/post', {
        method: 'POST',
        body: JSON.stringify({ title, author, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       location.reload()
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('#ModalLoginForm')
    .addEventListener('submit', addBlogHandler);
  