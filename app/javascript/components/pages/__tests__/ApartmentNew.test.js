import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ApartmentNew from '../ApartmentNew'

Enzyme.configure({ adapter: new Adapter() });


describe("when ApartmentNew page renders",() =>{
  let renderedApartmentNew
  beforeEach(() =>{
    renderedApartmentNew = shallow(<ApartmentNew/>)
  })
  
  it("displays a header",() =>{
    
    const header = renderedApartmentNew.find("h3")

    expect(header.length).toEqual(1);


  })

  it("displays a form", () =>{
    const form = renderedApartmentNew.find("Form")

    expect(form.length).toEqual(1)
  })

  it("displays a button", () =>{
    const button = renderedApartmentNew.find("Button")

    expect(button.length).toEqual(1)
  })
})