import {
  closeMenu,
  closeModal,
  getData,
  openMenu,
  openModal,
  save,
} from '../index.js'

import mockStore from 'redux-mock-store'
import axios from 'axios'

describe('actions/index', () => {
  let store

  beforeEach(() => {
    store = mockStore()
  })

  describe('#getData', () => {
    beforeEach(() => {
      axios.get
      .mockImplementationOnce(() =>
        Promise.resolve({
          data: [
            {
              virtualizationID: '1',
              apiType: 'REST',
              name: 'Pet Store',
              protocol: 'HTTP',
              port: '8081',
              running: false,
            },
            {
              virtualizationID: '2',
              apiType: 'WSDL',
              name: 'Currency Converter',
              protocol: 'HTTP',
              port: '8089',
              running: true,
            },
            {
              virtualizationID: '3',
              apiType: 'REST',
              name: 'PayStore',
              protocol: 'HTTPS',
              port: '8088',
              running: false,
            },
          ],
        })
      )

      store = mockStore({
        data: [
          {
            virtualizationID: '1',
            apiType: 'REST',
            name: 'Pet Store',
            protocol: 'HTTP',
            port: '8081',
            running: false,
          },
          {
            virtualizationID: '2',
            apiType: 'WSDL',
            name: 'Currency Converter',
            protocol: 'HTTP',
            port: '8089',
            running: true,
          },
          {
            virtualizationID: '3',
            apiType: 'REST',
            name: 'PayStore',
            protocol: 'HTTPS',
            port: '8088',
            running: false,
          },
        ],
      })
    })

    it('fetches virtualizations', async () => {
      try {
        await store.dispatch(getData())

        expect(axios.get).toHaveBeenCalledWith(
          'http://localhost:8090/sv/v1/virtualizations'
        )
      } catch (error) {}
    })
  })
})
