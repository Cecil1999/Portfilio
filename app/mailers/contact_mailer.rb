class ContactMailer < ApplicationMailer
    def contact_email(name, message, email)
        @name    = name
        @message = message
        mail(to: email, subject: "Contact me message")
    end
end
