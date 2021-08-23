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

    @log = Log.find_by! id: @id, user_id: current_user.id
    @shops = Shop.select(:id, :shop_name).where(user_id: current_user.id)
  end

  def create
    max = Log.select(:no).where(user_id: current_user.id).maximum(:no)
    now = Time.current

    if max == nil
      max = 1
    else
      max = max + 1
    end

    log = Log.new
    log.no = max
    log.date = now
    log.diving_point = "無題"
    log.temperature = 0.0
    log.water_temperature = 0.0
    log.in_time = "00:00"
    log.out_time = "00:00"
    log.start_pressure = 0
    log.end_pressure = 0
    log.max_depth = 0.0
    log.average_depth = 0.0
    log.transparency = 0.0
    log.diving_time = 0
    log.weight = 0
    log.suits = ""
    log.entry = ""
    log.water = ""
    log.free_text = ""
    log.map_position_lat = 0.0
    log.map_position_lng = 0.0
    log.user_id = current_user.id
    log.shop_id = -1
    log.save!

    res = { "id": log.id }
    render :json => res
  end

  def update
    id = params[:id]
    log = Log.find_by! id: id, user_id: current_user.id
    log.attributes = update_params
    log.save!
  end

  def destroy
    id = params[:id]
    log = Log.find_by! id: id, user_id: current_user.id
    log.destroy!
  end

  private
 
  def update_params
    params.permit :no, :date, :diving_point, :temperature, :water_temperature, :in_time, :out_time, :start_pressure, :end_pressure, :max_depth, :average_depth, :transparency, :diving_time, :weight, :suits, :entry, :water, :free_text, :map_position_lat, :map_position_lng, :shop_id
  end
end
