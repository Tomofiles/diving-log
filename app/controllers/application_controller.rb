class ApplicationController < ActionController::Base
  before_action :check_logged_in

  def current_user
    @current_user ||= User.find_by(email: session[:email])
  end

  def check_logged_in
    return if current_user

    redirect_to root_path
  end
end
