class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  after_action :track_action

  protected

  def track_action
    ahoy.track "Ran action", request.path_parameters
    VisitMailer.visit_email(request.path_parameters, current_visit).deliver
  end
end
