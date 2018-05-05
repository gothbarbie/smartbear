import React from 'react'
import { shallow } from 'enzyme'

import Instance from '../Instance'

describe('components/Instance', () => {
  let component

  beforeEach(() => {
    component = shallow(<Instance />)
  })

  it('renders Instance', () => {
    expect(component).toMatchSnapshot()
  })
})
