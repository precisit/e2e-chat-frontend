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

  var currentTime = moment().format('HH:mm:ss');
  var message = currentTime + ' - ' + messageInput.value;

  var listItem = document.createElement('li');
  var listItemText = document.createTextNode(message);

  listItem.appendChild(listItemText);
  messageList.appendChild(listItem);

  messageInput.value = '';
}
