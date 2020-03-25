function validateContactFormFields()
{
  var errors = false;
  if (!$('#contact_name').val()){
    $('#name_help_block').append('<div class="error_form_fields">Debe ingresar un nombre</div>');
    errors = true;
  }
  if (!validateEmail($('#contact_email').val())){
    $('#email_help_block').append('<div class="error_form_fields">Debe ingresar un email valido</div>');
    errors = true;
  }
  if (!$('#contact_message').val()){
    $('#message_help_block').append('<div class="error_form_fields">Debe ingresar un comentario</div>');
    errors = true;
  }
  if (errors)
    return false;
  return true;
}

function validateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat))
    return true;
  return false;
}