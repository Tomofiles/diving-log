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
  end
end
