// Connect to the server
// NOTE: You might have to change the address/port number depending on your server
var socket = io.connect('http://localhost:3001');

var sendButton = document.getElementById('send');
var messageInput = document.getElementById('message');
var messageList = document.getElementById('messages');

sendButton.addEventListener('click', createMessage);

messageInput.addEventListener('keydown', function(e) {
  // Enter key pressed
  if (e.keyCode == 13) {
    createMessage();
  }
});

function createMessage() {
  // Do nothing if the input field is empty
  if (messageInput.value.length == 0) {
    return;
  }

  // Send the message to the server
  socket.emit('newMessage', messageInput.value);

  // Clear the input field
  messageInput.value = '';
}

socket.on('newMessage', function(message) {
  // Create a <li> element node
  var listItem = document.createElement('li');
  // Create a text node containing the time and message text
  var listItemText = document.createTextNode(message.time + ' - ' + message.text);

  // Append the text node to the <li> element node...
  listItem.appendChild(listItemText);
  // ... and append the <li> element node to the message list
  messageList.appendChild(listItem);
});
