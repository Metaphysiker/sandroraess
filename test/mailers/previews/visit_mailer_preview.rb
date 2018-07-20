# Preview all emails at http://localhost:3000/rails/mailers/visit_mailer
class VisitMailerPreview < ActionMailer::Preview
  def visit_email_preview
    VisitMailer.visit_email()
  end
end
