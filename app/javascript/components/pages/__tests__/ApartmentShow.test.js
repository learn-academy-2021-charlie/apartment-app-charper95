import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentShow from '../ApartmentShow'

Enzyme.configure({ adapter: new Adapter() });

describe("When RockShow renders", () => {
    let renderedShow
    beforeEach(() =>{
      renderedShow = shallow(<ApartmentShow apartment = {apartment}/>)
    })

    const apartment = {
        id: 4,
        street: "789 Street",
        city: "SD", 
        state: "CA", 
        manager: "Joe", 
        email: "joe@testing.com", 
        price: "2000", 
        bedrooms: 2, 
        bathrooms: 3, 
        pets: "no pets allowed",
      }
    it("displays a heading with address", () => {
        const showHeading = renderedShow.find("h3")
        expect(showHeading.text()).toEqual(`${apartment.street}, ${apartment.city}, ${apartment.state}`)
    })
    it("displays the apartment manager and email", () => {
        const showName = renderedShow.find("p").first()
        expect(showName.text()).toEqual(`Manager: ${apartment.manager} | Email: ${apartment.email}`)
    })
    it("displays the apartment price, bedrooms, and bathrooms", () => {
        const showName = renderedShow.find("p").at(1)
        expect(showName.text()).toEqual(`Price: $${apartment.price} | ${apartment.bedrooms} Bed | ${apartment.bathrooms} Bath`)
    })
    it("displays the apartment pet allowance", () => {
        const showName = renderedShow.find("p").at(2)
        expect(showName.text()).toEqual(`${apartment.pets}`)
    })
})