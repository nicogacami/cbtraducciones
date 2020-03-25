# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    flash.now[:notice] = 'We have exactly books available.'
  end

  def send_email
    permitted_params = params.permit(:contact_name, :contact_email, :contact_message)
    ContactMailer.with(permitted_params).new_contact_email.deliver_later
    ContactMailer.with(permitted_params).thanks_email.deliver_later

    head :ok, content_type: 'text/html'
  end
end
