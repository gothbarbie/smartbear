import React from 'react'
import { shallow } from 'enzyme'

import { Instance } from '../Instance'

describe('components/Instance', () => {
  let component
  let instance
  let props
  let openMenu
  let closeMenu
  let openModal

  beforeEach(() => {
    openMenu = jest.fn()
    closeMenu = jest.fn()
    openModal = jest.fn()

    props = {
      apiType: 'GraphQL',
      closeMenu,
      menu: { id: 0 },
      name: 'Movie Collection',
      openMenu,
      openModal,
      port: 8080,
      protocol: 'http',
      running: true,
      virtualizationID: 1,
    }
    component = shallow(<Instance {...props} />)

    instance = component.instance()
  })

  it('renders Instance', () => {
    expect(component).toMatchSnapshot()
  })

  describe('#handleMenu', () => {
    it('should open menu (if not open)', () => {
      instance.handleMenu()

      expect(openMenu).toHaveBeenCalled()
    })

    it('should close menu (if it is open)', () => {
      component.setProps({
        menu: { id: 1 },
      })
      instance.handleMenu()

      expect(closeMenu).toHaveBeenCalled()
    })
  })
})
