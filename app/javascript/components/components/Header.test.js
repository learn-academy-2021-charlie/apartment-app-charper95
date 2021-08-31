import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'

Enzyme.configure({adapter: new Adapter()})

describe("When the Header Renders", () => {
    it("displays a navigation bar", () => {
      const header = shallow(<Header />)
      const headerNav = header.find("ul")
      expect(headerNav.length).toEqual(2)
    })
  })