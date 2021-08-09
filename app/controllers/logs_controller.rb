class LogsController < ApplicationController
  before_action :current_user

  def show
    @id = params[:id]

    mode = 'edit'
    
    m = params[:m]
    if m != nil && mode != m
      redirect_to "/logs/#{@id}"
    end

    @isEdit = m == "edit"
  end
end
