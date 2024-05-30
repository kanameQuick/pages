function getYearDiff(specificDate) {
    // Create a Date object from the specific date string
    const date = new Date(specificDate);
  
    // Get today's date
    const today = new Date();
  
    // Get the year difference
    const yearDiff = today.getFullYear() - date.getFullYear();
  
    // Handle cases where the specific date is in the future (negative difference)
    if (date > today) {
      return yearDiff - 1;
    }
  
    return yearDiff;
  }
  
  // Example usage
  const specificDateStr = "2006-04-06";
  const yearDifference = getYearDiff(specificDateStr);

  document.getElementById("age").innerHTML = "6 April 2006 • " + yearDifference + " years old"

const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();

  // Replace 'YOUR_WEBHOOK_URL' with your actual Discord webhook URL
  const webhookUrl = 'https://discord.com/api/webhooks/1245600286526148701/VjuYCCcbsnrTZ7iLz7Vyz9V3JmfhjKCdFcYpe8t6YEFMELFCj2yJm4VOKuh177pOFqav';

  if (!message) {
    alert('Please enter a message.');
    return;
  }

  const jsonData = {
    content: message,
    username: 'Anonymous', // You can set a custom username here
  };

  fetch(webhookUrl, {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(data => {
    console.log('Message sent:', data);
    messageInput.value = ''; // Clear the message input after sending
  })
  .catch(error => {
    console.error('Error sending message:', error);
    alert('Error sending message. Please try again later.');
  });
}
