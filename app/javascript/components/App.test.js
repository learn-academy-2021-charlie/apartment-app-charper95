import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentEdit from "./pages/ApartmentEdit";

Enzyme.configure({ adapter: new Adapter() });

describe("when app renders", () => {
    let renderedApp
    beforeEach(() =>{
      renderedApp = shallow(<App/>)
    })

    it("renders a header and footer component", () => {
      //act
      const renderedHeader = renderedApp.find("Header")
      const renderedFooter = renderedApp.find("Footer")
  
      //assert
      expect(renderedHeader.length).toEqual(1)
      expect(renderedFooter.length).toEqual(1)
    })

    it("provides a route to home component", () => {
        //act
        const renderedHomeRoute = renderedApp.find('[path="/"]')
    
        //assert
        expect(renderedHomeRoute.props().component).toEqual(Home)
      })

      it("provides a route to ApartmentIndex component", () => { 
        //act
        const renderedIndexRoute = renderedApp.find('[path="/apartmentindex"]')
    
        //assert
        expect(renderedIndexRoute.props().component).toEqual(ApartmentIndex)
      })

      it("provides a route to ApartmentShow component", () => { 
        //act
        const renderedShowRoute = renderedApp.find('[path="/apartmentshow"]')
    
        //assert
        expect(renderedShowRoute.props().component).toEqual(ApartmentShow)
      })

      it("provides a route to ApartmentNew component", () => { 
        //act
        const renderedNewRoute = renderedApp.find('[path="/apartmentnew"]')
    
        //assert
        expect(renderedNewRoute.props().component).toEqual(ApartmentNew)
      })

      it("provides a route to ApartmentEdit component", () => { 
        //act
        const renderedEditRoute = renderedApp.find('[path="/apartmentedit"]')
    
        //assert
        expect(renderedEditRoute.props().component).toEqual(ApartmentEdit)
      })
      it("has 6 routes which will include a NotFound component", () => { 
        //act
        const renderedNotFoundRoute = renderedApp.find('Route')
        //assert
        expect(renderedNotFoundRoute.length).toEqual(6)
      })
});