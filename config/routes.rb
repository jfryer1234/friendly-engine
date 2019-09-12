Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # root route
  root 'site#index'

  # plant routes
  get 'api/plants', to: 'plants#index'
  get 'api/plants/:id', to: 'plants#show'
  post 'api/plants', to: 'plants#create'
  delete 'api/plants/:id', to: 'plants#delete'
  put 'api/plants/:id', to: 'plants#update'

end
//afkjbaskjgnsdlfgbsdnfgksnjdglksnjg
