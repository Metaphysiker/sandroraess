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
    render layout: "application_blank"
    #send_data render_to_string(pdf: "cv-sandro-raess",
    #                           template: "static_pages/cv.html.erb",
    #                           layout: "pdf.html"), filename: "cv-sandro-raess.pdf"

    #html = StaticPagesController.new.render_to_string({
    #  template: 'static_pages/cv.html.erb',
    #  layout: 'pdf.html'
    #})
    #pdf = Grover.new("https://de.wikipedia.org/wiki/Wikipedia:Hauptseite", format: 'A4').to_pdf
    #send_data pdf, filename: "cv.pdf"
  end

end
