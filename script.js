// Function to update greeting based on time of day
function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greetingText = "Good Day";

  if (hours < 12) {
    greetingText = "Good Morning";
  } else if (hours < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  document.getElementById('greeting').textContent = `${greetingText}, Anita!`;
}

// Function to format and display the current date
function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

// Function to update the time every minute
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}`;
}

// Initial updates and interval setup for live time update
updateGreeting();
updateDate();
updateTime();
setInterval(updateTime, 60000); // Update time every minute
