Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: "users/sessions" }

  authenticated do
    namespace :api, path: "/", constraints: { format: "json" } do

    end

    devise_scope :user do
      root "logged_in#index", as: :authenticated_root
      get "logout", to: "users/sessions#destroy", as: :destroy_user_session

      scope "/", constraints: { format: "html" } do
        get "/*path" => "logged_in#index", as: "authenticated_app"
      end
    end
  end

  get "login", to: "logged_out#index", as: :new_user_session
  root "home#index"
end
