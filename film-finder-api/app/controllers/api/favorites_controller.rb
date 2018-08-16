class Api::FavoritesController < ApplicationController

  def index 
    render json: Favorite.all
  end

  def show 
    render json: Favorite.find_by(id: params[:id])
  end

  def create 
    favorite = Favorite.new(favorite_params)
    if favorite.save 
      render json:favorite
    else
      render json: {message: favorite.errors}, status: 400 
    end
  end
 
   

  def update 
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: {message: @favorite.errors}, status: 400
    end
  end

  def destroy
    if @favorite.destroy
      render status: 204
    else
      render json: {message: "Unable to delete"}, status: 400
    end
  end
  
  private

    def set_favorite
      @favorite = Favorite.find_by(id: params[:id])
    end

    def favorite_params
      params.require(:favorite).permit(:title, :backdrop_path, :moviedb_id, :overview, :popularity, :post_path, :release_date)
    end  


  end



