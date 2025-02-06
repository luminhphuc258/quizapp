document.getElementById('loginForm').addEventListener('submit', function (event) {
  alert("login");
  alert(formData.get('username'));
  event.preventDefault();

  const formData = new FormData(this);
  const url = "http://localhost:3000/login";

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: formData.get('username'),
      password: formData.get('password')
    })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed with status ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert('Login Successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Unauthorized!');
    });
});