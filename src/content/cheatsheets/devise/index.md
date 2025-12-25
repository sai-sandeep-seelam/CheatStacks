
### About


[Devise](https://github.com/plataformatec/devise) is a flexible authentication 
gem.

- <https://github.com/plataformatec/devise>

### Installation

Rails 3: Add the following to your Gemfile

    gem "devise"
    gem "hpricot"
    gem "ruby_parser"

Install devise in your project

    $ rails generate devise:install

Generate devise for your model

    $ rails generate devise MODEL
    $ rake db:migrate

(Optional) Generate devise views

    $ rails generate devise:views

### Helpers

    user_signed_in?
    current_user
    user_session
    destroy_user_session_path (Logout)
    new_user_session_path (Login)
    edit_user_registration_path (Edit registration)
    new_user_registration_path (Register new user)

### Controller stuff

    before_filter :authenticate_user!

Model
-----

### Model options

    class User < ActiveRecord::Base
      devise :database_authenticatable,
        :registerable,
        :confirmable,
        :recoverable,
        :rememberable,
        :trackable,
        :validatable
    end

### Migration helpers

    create_table :users do |t|
      t.database_authenticatable
      t.confirmable
      t.recoverable
      t.rememberable
      t.trackable
      t.timestamps
    end

Routing
-------

### Authenticated and unauthenticated routes

    unauthenticated do
       root :to => 'home#index'
    end

    authenticated do
      root :to => 'dashboard#index'
    end

### As
    as :user do
      get 'sign_in', :to => 'devise/sessions#new'
    end

### Devise_for magic
  
    devise_for :users

        # Session routes for Authenticatable (default)
             new_user_session GET  /users/sign_in                    
                 user_session POST /users/sign_in                    
         destroy_user_session GET  /users/sign_out                   
       
        # Password routes for Recoverable, if User model has :recoverable configured
            new_user_password GET  /users/password/new(.:format)     
           edit_user_password GET  /users/password/edit(.:format)    
                user_password PUT  /users/password(.:format)         
                              POST /users/password(.:format)         
       
        # Confirmation routes for Confirmable, if User model has :confirmable configured
        new_user_confirmation GET  /users/confirmation/new(.:format) 
            user_confirmation GET  /users/confirmation(.:format)     
                              POST /users/confirmation(.:format)     

### Customizing devise_for

    devise_for :users,
      :path => "usuarios",
      :path_names => {
        :sign_in => 'login',
        :sign_out => 'logout',
        :password => 'secret',
        :confirmation => 'verification',
        :unlock => 'unblock',
        :registration => 'register',
        :sign_up => 'cmon_let_me_in' }

Test helpers
------------

### Test helpers

    include Devise::TestHelpers

    sign_in @user
    sign_out @user

See: <https://github.com/plataformatec/devise/blob/1094ba65aac1d37713f2cba71f9edad76b5ca274/lib/devise/test_helpers.rb>
