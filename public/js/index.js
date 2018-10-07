let socket = io();

socket.on("connect", function() {
  console.log("Connected to server.");
});

socket.on("disconnect", function() {
  console.log("Server disconected.");
});

socket.on("newMessage", function(message) {
  console.log("Server sent new message", message);
});