const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const checkPassword = document.querySelector('#check-password')
  
    if (email && password === checkPassword) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/homepage");
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);