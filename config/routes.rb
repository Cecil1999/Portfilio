Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Page routes.
  get "/home", to: "pages#home"
  get "/contact", to: "pages#contact"
  get "/projects", to: "pages#projects"
  get "/resume", to: "pages#resume"

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker


  root "pages#home"
end
