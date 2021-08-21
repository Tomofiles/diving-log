class ShopsController < ApplicationController
  before_action :current_user

  def show
    @id = params[:id]

    mode = 'edit'
    
    m = params[:m]
    if m != nil && mode != m
      redirect_to "/logs/#{@id}"
    end

    @isEdit = m == "edit"

    @shop = Shop.find_by! id: @id, user_id: current_user.id
  end

  def update
    id = params[:id]
    shop = Shop.find_by! id: id, user_id: current_user.id
    shop.attributes = update_params
    shop.save!
  end

  private
  
  def update_params
    params.permit :organization, :shop_name, :shop_area, :address, :telephone_number, :url, :free_text, :map_position_lat, :map_position_lng
  end
end
