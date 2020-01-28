$(document).ready(function () {
  $('.icon-send').click(function () {
    sendMessage();
  });


$('.send-message').keypress(function(event) {
  if(event.which == 13) {
    sendMessage();
  }
});

$('.contact-search input').keyup(function() {
  var text = $('.contact-search input').val().toLowerCase();

  $('.conctact-element').each(function() {
    var contactName = $(this).find('.contact-name').text().toLowerCase();
    if(contactName.includes(text) == true) {
      console.log('incluso');
      $(this).show();

      } else {
      $(this).hide();
      }
    });
  });
});

function sendMessage() {
  var textMessage = $('input.send-message').val();

  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage);

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.message-time').text(time);
    newMessage.addClass('sent');
    $('.col-right-messages.active').append(newMessage);
    scrollMessage();
    setTimeout(sendResponse, 1000);
    $('input.send-message').val('');
  }
}

function sendResponse() {
  var messageResponse = $('.template .message').clone();
  messageResponse.find('.message-text').text('ok');
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours + ':' + minutes;
  messageResponse.find('.message-time').text(time);
  messageResponse.addClass('received');
  $('col-right-message.active').append(messageResponse);
  scrollMessage();

}

function scrollMessage() {
  var heightContainer = $('.col-right.message.active').height();
  console.log(heightContainer);
  $('message-wrapper').scrollTop(heightContainer);
}

function searchChat() {
  var contactName = $(this).text();
  var stringa = contactName.toLowerCase();
  var research = $('.contact-search').val();

  var x = stringa.indexOf(research.toLowerCase());

  if (n !== -1) {
    $(this).parents('.contact-info').show();

    } else {
    $(this).parents('.contact-info').hide();
    }
  });
}


function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
