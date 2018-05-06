import data from '../data'
import { FETCH_DATA, UPDATE_DATA } from '../../actions/types'

describe('reducers/data', () => {
  it('handles FETCH_DATA', () => {
    const newState = data([], {
      type: FETCH_DATA,
      payload: [
        {
          virtualizationID: 1,
          apiType: 'REST',
          name: 'Smurfbyn',
          protocol: 'HTTP',
          port: '8081',
          running: false,
        },
        {
          virtualizationID: 2,
          apiType: 'REST',
          name: 'Tomtens Verkstad',
          protocol: 'HTTPS',
          port: '8082',
          running: true,
        },
      ],
    })

    expect(newState).toEqual([
      {
        virtualizationID: 1,
        apiType: 'REST',
        name: 'Smurfbyn',
        protocol: 'HTTP',
        port: '8081',
        running: false,
      },
      {
        virtualizationID: 2,
        apiType: 'REST',
        name: 'Tomtens Verkstad',
        protocol: 'HTTPS',
        port: '8082',
        running: true,
      },
    ])
  })

  it('handles UPDATE_DATA', () => {

    const state = [{
      virtualizationID: 1,
      apiType: 'REST',
      name: 'Smurfbyn',
      protocol: 'HTTP',
      port: '8081',
      running: false,
    }]

    const newData = {
      type: UPDATE_DATA,
      payload: {
        id: 1,
        apiType: 'REST',
        name: 'Smurfbyn',
        protocol: 'HTTPS',
        port: '8081',
        running: false,
      },
    }

    const newState = data(state, newData)
    
    expect(newState).toEqual([
      {
        virtualizationID: 1,
        apiType: 'REST',
        name: 'Smurfbyn',
        protocol: 'HTTPS',
        port: '8081',
        running: false,
      },
    ])
  })
})
