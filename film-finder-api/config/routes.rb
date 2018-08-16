Rails.application.routes.draw do
  namespace :api do
    resources :favorites, except: [:new, :edit]
  end
end
