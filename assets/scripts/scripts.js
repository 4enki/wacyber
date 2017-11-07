'use strict';

// подсвечиваем ссылки с одинаковым адресом
if ($) $(function () {

  $('a').hover(function () {
    if ($(this).attr('href') != '' && $(this).attr('href') != '#') {
      $('a[href="' + $(this).attr('href') + '"]').addClass('hover');
    }
  }, function () {
    $('a').removeClass('hover');
  });
});
// /подсвечиваем ссылки с одинаковым адресом
'use strict';

/**
 * Created by admin on 07.11.17.
 */

var form = $('_landing .form-inline');
var formInput = $('_landing .form-inline .form-control');
var email = $('#inp-email');

form.click(function () {
  // Проверка на заполнение
  if (email.val() == '' || typeof email.val() === 'undefined') {
    $('#err-email').css({ display: 'inline-block' }).text(t('required_field'));
    email.addClass('field-error');
    return 0;
  } else {
    email.removeClass('field-error');
    $('#err-email').hide();
  }

  //Проверка на валидный email
  var reExp = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
  if (email.val() == '' || !reExp.test(email.val())) {
    $('#err-email').css({ display: 'inline-block' }).text(t('invalid_email'));
    email.addClass('field-error');
    return false;
  } else {
    email.removeClass('field-error');
    $('#err-email').hide();
  }

  //Заполнение пароля
  if (password.val() == '' || typeof password.val() === 'undefined') {
    $('#err-password').css({ display: 'inline-block' }).text(t('required_field'));
    password.addClass('field-error');
    return 0;
  } else {
    password.removeClass('field-error');
    $('#err-password').hide();
  }
});