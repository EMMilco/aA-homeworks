class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: {errors: "Invalid credentials"}, status: 403
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: {errors: "Not logged in"}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username,:password)
  end
end
