class PagesController < ApplicationController
    before_action :page_params, only: %i[ email ]

    def home
    end

    def projects
    end

    def resume
    end

    def contact
    end

    def email
        @email_info = params

        if @email_info['email'] !~ URI::MailTo::EMAIL_REGEXP
            flash['alert'] = 'Please use a valid email.'
        else
            flash['notice'] = 'Email has been sent.'
            ContactMailer.contact_email(@email_info['name'], @email_info['message'], @email_info['email']).deliver_later
        end

        redirect_to contact_path
    end

    private

    def page_params
        params.expect(:email, :name, :message)
    end

end
