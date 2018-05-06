import React from 'react'
import { shallow } from 'enzyme'

import { Instance } from '../Instance'

describe('components/Instance', () => {
  let component
  let props 
  beforeEach(() => {
    props = {
      apiType: 'GraphQL',
      closeMenu: jest.fn(),
      menu: { id: 0 },
      name: 'Movie Collection',
      openMenu: jest.fn(),
      openModal: jest.fn(),
      port: 8080,
      protocol: 'http',
      running: true,
      virtualizationID: 1,


    }
    component = shallow(<Instance {...props}  />)
  })

  it('renders Instance', () => {
    expect(component).toMatchSnapshot()
  })
})
