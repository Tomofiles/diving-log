class LogsController < ApplicationController
  before_action :current_user

  def show
    @id = params[:id]
  end
end
