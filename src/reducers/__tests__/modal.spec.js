import modal from '../modal'
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/types'

describe('reducers/modal', () => {
  it('handles OPEN_MODAL', () => {
    const newState = modal({ id: 0 }, {
      type: OPEN_MODAL, 
      payload: 1,
    })
    expect(newState).toEqual({
      id: 1,
    })
  })

  it('handles CLOSE_MODAL', () => {
    const newState = modal({ id: 1 }, {
      type: CLOSE_MODAL,
    })
    expect(newState).toEqual({
      id: 0,
    })
  })
})

