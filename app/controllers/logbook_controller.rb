class LogbookController < ApplicationController
  before_action :current_user

  def index
    @m = params[:m]
    if @m == nil
      redirect_to '/logbook?m=mylog'
    end
  end
end
