import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../Modal'

describe('components/Modal', () => {
  let component
  let props 

  beforeEach(() => {
    props = {
      closeModal: jest.fn(),
      data: {
        find: jest.fn(),
      },
      modal: {
        id: 1,
      },
      save: jest.fn(),
    }
    component = shallow(<Modal {...props} />)
  })

  it('renders Modal', () => {
    expect(component).toMatchSnapshot()
  })
})
