App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {

  },

  disconnected: function() {

  },
  received: function(data) {
    if (data.mention){ alert("you have a new mention");}
    if (data.message != null) {
      $('#messages-table').append(data.message);
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
//this function makes the autoscroll for the displayed messages
scroll_bottom = function() {
  var height = $('#messages')[0].scrollHeight
  $('#messages').scrollTop(height);
};