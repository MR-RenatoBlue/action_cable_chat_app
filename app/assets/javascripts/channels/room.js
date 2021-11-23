
App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {

  },

  disconnected: function() {

  },
  received: function(data) {
     if (data.content != null) {
      $('#messages-table').append('<div class="message">' + '<div class="message-user">' 
      + data.username + ":" + '</div>' + '<div class="message-content">' 
      + data.content + '</div>' + '</div>');
      scroll_bottom();
    }
  }
});

$(document).on('turbolinks:load', function() {
  submit_message();
  return scroll_bottom();
});

submit_message = function() {
  $('#message_content').on('keydown', function(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      $('input').click();
      event.target.value = "";
      event.preventDefault();
    }
  });
};

scroll_bottom = function() {
  let height = $('#messages')[0].scrollHeight
  $('#messages').scrollTop(height);
};