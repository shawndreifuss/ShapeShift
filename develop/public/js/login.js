const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    console.log("made it in here")
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert("incorrect Email or Password");
    }
  }
};
console.log("file-linked")
document
.querySelector('.login-button')
.addEventListener('click', loginFormHandler);




const addBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const author = document.querySelector('#blog-author').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if (title && author && content) {
    const response = await fetch('/api/users/blogs', {
      method: 'POST',
      body: JSON.stringify({ title, author, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('#ModalLoginForm')
  .addEventListener('submit', addBlogHandler);

  
