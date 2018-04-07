Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#welcome'

  get '/wisdom', to: 'static_pages#wisdom'

  get '/music', to: 'static_pages#music'

  get '/hire', to: 'static_pages#hire'

end
