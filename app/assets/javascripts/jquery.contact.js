(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	$('#comments_form').submit(function(){
		var action = $(this).attr('action');
		$(".error_form_fields").remove();
		if (!validateContactFormFields()){
			return;
		}

		$("#message").slideUp(750,function() {
			$('#submit').html(
					 							 `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...`
											 );
			$('#submit').prop("disabled", true);

			$.post(action, {
				contact_name: $('#contact_name').val(),
				contact_email: $('#contact_email').val(),
				contact_message: $('#contact_message').val(),
			},
				function(data){
					$('#contact_name').val('');
					$('#contact_email').val('');
					$('#contact_message').val('');
					$('#submit').removeAttr('disabled');
					$('#comments_form').slideUp('fast');
					$('#contact_title').html("Gracias por su consulta, recibirá un mail con la confirmación");
				}
			);
		});

		return false;

	});

});

}(jQuery));