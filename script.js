// Open the chat window when the chat screen is clicked
document.getElementById("chat-screen").addEventListener("click", function () {
  document.getElementById("chat-window").style.display = "block";
});

// Close the chat window when the close button is clicked
document
  .getElementById("close-chat-btn")
  .addEventListener("click", function () {
    document.getElementById("chat-window").style.display = "none";
  });

// Send message when the send button is clicked
document.getElementById("send-btn").addEventListener("click", function () {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value.trim();

  if (message !== "") {
    // Simulate receiving a response from the support agent
    const reply =
      "Thank you for your message! Our support team will get back to you shortly.";
    receiveMessage(reply);

    messageInput.value = "";
    messageInput.focus();
  }
});

// Function to receive a message and display it in the chat window
function receiveMessage(message) {
  const chatMessages = document.getElementById("chat-messages");
  const messageElement = document.createElement("div");
  messageElement.className = "message received";
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);

  // Scroll to the bottom of the chat window
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
