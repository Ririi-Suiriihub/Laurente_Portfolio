/* Contact form: sends to Formspree and shows a clear success or error message */
(function ($) {
  'use strict';
  var $form = $('#contact-form'), $msg = $('.contact__msg');
  function show(ok, text) {
    $msg.removeClass('ok err').addClass(ok ? 'ok' : 'err').text(text).show();
  }
  $form.on('submit', function (e) {
    e.preventDefault();
    var action = $form.attr('action');
    if (action.indexOf('YOUR_FORM_ID') !== -1) {
      show(false, 'The form is not connected yet. Please email me directly at youremail@example.com.');
      return;
    }
    $.ajax({ type: 'POST', url: action, data: $form.serialize(), dataType: 'json', headers: { Accept: 'application/json' } })
      .done(function () { show(true, 'Thank you! Your message was sent.'); $form[0].reset(); })
      .fail(function () { show(false, 'Sorry, the message could not be sent. Please try again or email me directly.'); });
  });
})(jQuery);
