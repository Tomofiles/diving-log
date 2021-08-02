class SessionsController < ApplicationController
  skip_before_action :check_logged_in, only: :create
  
  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:email] = @user.email
    redirect_to '/logbook'
  end

  def destroy
    session[:email] = nil
    redirect_to '/loggedout'
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
