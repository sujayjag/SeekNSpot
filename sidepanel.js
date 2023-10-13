document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
      // Append user message to chatbox
      const chatbox = document.getElementById('chatbox');
      chatbox.innerHTML += `<div class="user">User: ${userInput}</div>`;
      
      // TODO: Make API call to LLaMA 2 model and get the response
      // For now, we'll just echo the user input
      chatbox.innerHTML += `<div class="assistant">Assistant: ${userInput}</div>`;
      
      // Clear the user input
      document.getElementById('userInput').value = '';
      
      // Auto-scroll to the bottom of the chatbox
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  });
  