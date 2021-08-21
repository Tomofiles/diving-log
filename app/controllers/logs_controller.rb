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

  def update
    id = params[:id]
    log = Log.find_by! id: id, user_id: current_user.id
    log.attributes = update_params
    log.save!
  end

  private
 
  def update_params
    params.permit :no, :date, :diving_point, :temperature, :water_temperature, :in_time, :out_time, :start_pressure, :end_pressure, :max_depth, :average_depth, :transparency, :diving_time, :weight, :suits, :entry, :water, :free_text, :map_position_lat, :map_position_lng, :shop_id
  end
end
