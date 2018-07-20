class VisitMailer < ApplicationMailer
  default from: "s.raess@me.com"
  logger.debug "VisitMailer?"

  def visit_email()
  logger.debug "Mail?"
  mail(to: 's.raess@me.com', subject: 'Visit!')
end


end
