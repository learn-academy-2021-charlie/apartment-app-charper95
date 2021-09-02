import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When the NotFound Page Renders", () => {
    it("displays a gif", () => {
      const notFound = shallow(<NotFound />)
      const notFoundGif = notFound.find("img")
      expect(notFoundGif.length).toEqual(1)
    })
})