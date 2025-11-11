document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const event = document.getElementById('event').value;

  if (!name || !email || !event) {
    alert('Please fill in all required fields.');
    return;
  }

  alert(`Thank you, ${name}! Your registration for the ${event} has been received.`);
  this.reset();
});