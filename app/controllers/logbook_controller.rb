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
      @items = Log.select(:id, :no, :diving_point, :date).where(user_id: current_user.id).order("no DESC")
    end
    if @isMyShop
      @items = Shop.select(:id, :organization, :shop_name, :shop_area).where(user_id: current_user.id).order("id DESC")
    end
    if @isMyMap
      @items = Log.select(:id, :no, :diving_point, :date, :map_position_lat, :map_position_lng).where(user_id: current_user.id)
    end
  end
end
