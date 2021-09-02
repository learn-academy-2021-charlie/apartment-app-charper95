import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({adapter: new Adapter()})

describe("When the Footer Renders", () => {
    it("displays text", () => {
      const footer = shallow(<Footer />)
      const footerText = footer.find("p")
      expect(footerText.length).toEqual(1)
    })
})