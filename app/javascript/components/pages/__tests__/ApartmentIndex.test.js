import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from '../ApartmentIndex'

Enzyme.configure({adapter: new Adapter()})

describe("When the Home Page Renders", () => {
    it("displays index cards", () => {
      const index = shallow(<ApartmentIndex />)
      const indexCard = index.find('CardGroup')
      expect(indexCard.length).toEqual(1)
    })
})