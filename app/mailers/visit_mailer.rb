class VisitMailer < ApplicationMailer
  default from: "philotester5@gmail.com"

  def visit_email(params, current_visit)
    @params = params
    @currentvisit = current_visit
  mail(to: 's.raess@me.com', subject: 'Visit!')
end


end
