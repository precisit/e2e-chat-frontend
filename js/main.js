var socket = io.connect('http://192.168.0.101:3001');

var sendButton = document.getElementById('send');
var messageInput = document.getElementById('message');
var messageList = document.getElementById('messages');

sendButton.addEventListener('click', createMessage);

messageInput.addEventListener('keydown', function(e) {
  if (e.keyCode == 13) {
    createMessage();
  }
});

function createMessage() {
  if (messageInput.value.length == 0) {
    return;
  }

  socket.emit('messageToServer', {
    text: messageInput.value
  });

  messageInput.value = '';
}

socket.on('messageToClient', function(message) {
  var listItem = document.createElement('li');
  var listItemText = document.createTextNode(message.time + ' - ' + message.text);

  listItem.appendChild(listItemText);
  messageList.appendChild(listItem);
});
