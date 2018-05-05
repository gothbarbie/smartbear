import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'

describe('components/Button', () => {
  let component

  beforeEach(() => {
    component = shallow(<Button />)
  })

  it('renders Button', () => {
    expect(component).toMatchSnapshot()
  })
})
