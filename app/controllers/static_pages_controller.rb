class StaticPagesController < ApplicationController

  def welcome
    logger.debug "welcome!"
    VisitMailer.visit_email()
  end

  def wisdom

  end

  def music

  end

  def hire

  end

  def visits

  end

end
