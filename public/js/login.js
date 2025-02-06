document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert(username);
  const url = "http://localhost:3000/login";

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
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