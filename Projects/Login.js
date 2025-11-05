document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    alert(`Logged in as ${email}`);
    // You can add actual login logic here (e.g., API call)
  } else {
    alert('Please fill in both fields.');
  }
});
