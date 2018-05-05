import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../Modal'

describe('components/Modal', () => {
  let component

  beforeEach(() => {
    component = shallow(<Modal modal={{ id: 1 }} />)
  })

  it('renders Modal', () => {
    expect(component).toMatchSnapshot()
  })
})
