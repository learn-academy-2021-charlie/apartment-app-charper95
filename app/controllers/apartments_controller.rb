class ApartmentsController < ApplicationController
    def index
        apartments = current_user.apartments.all
        render json: apartments
    end

    def create
        apartment = current_user.apartments.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    def update
        apartment = current_user.apartments.find(params[:id])
        apartment.update(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    def destroy
        apartment = current_user.apartments.find(params[:id])
        apartment.delete()
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bathrooms, :bedrooms, :pets, :user_id)
    end
end
