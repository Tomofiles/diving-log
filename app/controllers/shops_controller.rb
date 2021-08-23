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

  def create
    shop = Shop.new
    shop.organization = ""
    shop.shop_name = "無題"
    shop.shop_area = ""
    shop.address = ""
    shop.telephone_number = ""
    shop.url = ""
    shop.free_text = ""
    shop.map_position_lat = 0.0
    shop.map_position_lng = 0.0
    shop.user_id = current_user.id
    shop.save!
    res = { "id": shop.id }
    render :json => res
  end

  def update
    id = params[:id]
    shop = Shop.find_by! id: id, user_id: current_user.id
    shop.attributes = update_params
    shop.save!
  end

  def destroy
    id = params[:id]

    count = Log.select(:id).where(user_id: current_user.id, shop_id: id).count
    if count > 0
      raise RuntimeError, "couldn't deleted because shop is used by log"
    end

    shop = Shop.find_by! id: id, user_id: current_user.id
    shop.destroy!
  end

  private
  
  def update_params
    params.permit :organization, :shop_name, :shop_area, :address, :telephone_number, :url, :free_text, :map_position_lat, :map_position_lng
  end
end
