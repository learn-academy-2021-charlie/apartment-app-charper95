import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({adapter: new Adapter()})

describe("When the Home Page Renders", () => {
    it("displays a background image", () => {
      const home = shallow(<Home />)
      const homeImg = home.find('div').at(1).props().style
      expect(homeImg.backgroundImage).toEqual('linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(this is mock pic)')
    })
})