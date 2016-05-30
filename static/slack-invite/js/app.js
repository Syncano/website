$(function() {
  var messages = {
    already_invited: "Uh oh! It looks like that email address has already been invited. If you think this is an error, please send a note to <a href='mailto:support@syncano.io'>support@syncano.io</a>.",
    invite_sent: "Woo hoo!  Your invite is on it's way<br />welcome to the community!",
    already_in_team: "We can't send you another invite - you are already a member!"
  };

  $('.jsForm').on('submit', function(e) {
    e.preventDefault();

    var url = "https://api.syncano.io/v1/instances/black-dew-3304/webhooks/p/9659a5f1693cf77733f300f1da949d3a9865f5bc/slack_invite/";
    var data = { email: $('[name="email"]').val() };

    $.post(url, data, function(data) {
      $('.jsForm').removeClass('form--error');

      var result = JSON.parse(data.result.stdout);

      if (result.error) {
        $('.jsFormMessage p').html(messages[result.error]);
        $('.jsFormMessage').addClass('form__message--error').show();
        $('.jsForm').addClass('form--error');
      } else {
        $('.jsFormMessage p').html(messages.invite_sent);
        $('.jsFormMessage').addClass('form__message--success').show();
        $('.jsForm').addClass('form--success');
      }
    });
  });
});
