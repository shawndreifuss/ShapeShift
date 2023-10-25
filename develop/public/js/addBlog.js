


const addBlogHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const author = document.querySelector('#blog-author').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    console.log(title,author,content)
    if (title && author && content) {
      const response = await fetch('/api/blogs', {
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
  