const logout = async () => {
  console.log("im in ")
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  req.session.destroy()
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document
  .querySelector('#logout')
  .addEventListener('click', logout());


