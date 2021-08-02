class TopController < ApplicationController
  before_action :current_user
  skip_before_action :check_logged_in, only: :index
  
  def index
  end
end
