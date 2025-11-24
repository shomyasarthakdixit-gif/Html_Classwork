// script.js
function generateGreeting() {
  const name = document.getElementById("nameInput").value.trim();
  const mood = document.getElementById("moodInput").value.trim().toLowerCase();
  const messageDiv = document.getElementById("greetingMessage");

  const hour = new Date().getHours();
  let timeGreeting = "";

  if (hour < 12) {
    timeGreeting = "Good morning";
  } else if (hour < 18) {
    timeGreeting = "Good afternoon";
  } else {
    timeGreeting = "Good evening";
  }

  let moodMessage = "";
  switch (mood) {
    case "happy":
      moodMessage = "It's great to see you smiling!";
      break;
    case "sad":
      moodMessage = "Hope things get better soon.";
      break;
    case "excited":
      moodMessage = "Let's make today amazing!";
      break;
    default:
      moodMessage = "Wishing you a wonderful day!";
  }

  messageDiv.textContent = `${timeGreeting}, ${name}! ${moodMessage}`;
  messageDiv.classList.add("show");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}