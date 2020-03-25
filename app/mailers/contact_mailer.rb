class ContactMailer < ApplicationMailer
  default from: 'notifications@cbtraducciones.com'
  OWNER_EMAIL = 'nicogacami@gmail.com'.freeze

  def thanks_email
    @name = params[:contact_name]
    @email = params[:contact_email]
    mail(
      to: @email,
      subject: 'Gracias por su consulta, le contestaremos a la brevedad.'
    )
  end

  def new_contact_email
    @name = params[:contact_name]
    @email = params[:contact_email]
    @contact_message = params[:contact_message]
    mail(
      to: OWNER_EMAIL,
      subject: 'Recibiste una nueva consulta.'
    )
  end
end
