class LogbookController < ApplicationController
  before_action :current_user

  def index
    mode = 'mylog', 'myshop', 'mymap'
    
    m = params[:m]
    if m == nil || !mode.include?(m)
      redirect_to '/logbook?m=mylog'
    end

    @isMyLog = m == "mylog"
    @isMyShop = m == "myshop"
    @isMyMap = m == "mymap"

    if @isMyLog
      @logs = Log.select(:id, :no, :diving_point, :date).where(user_id: current_user.id)
    end
  end
end
