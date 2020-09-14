class StaticPagesController < ApplicationController

  def welcome
    #VisitMailer.visit_email().deliver
  end

  def wisdom

  end

  def music

  end

  def hire

  end

  def visits

  end

  def essays

  end

  def cv
    #render layout: "application_blank"
    send_data render_to_string(pdf: "cv-sandro-raess",
                               template: "static_pages/cv.html.erb",
                               layout: "pdf.html",
                               dpi: 75), filename: "cv-sandro-raess.pdf"
  end

end
