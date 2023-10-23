const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && needed_funding && description) {
      //TODO: Complete the fetch POST request to create a project
      fetch('url', {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Body: body,
        Cache: 'default'
      })
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);