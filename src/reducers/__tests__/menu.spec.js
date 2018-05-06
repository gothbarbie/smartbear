import menu from '../menu'
import { OPEN_MENU, CLOSE_MENU } from '../../actions/types'

describe('reducers/menu', () => {
  it('handles OPEN_MENU', () => {
    const newState = menu(
      { id: 0 },
      {
        type: OPEN_MENU,
        payload: 1,
      }
    )
    expect(newState).toEqual({
      id: 1,
    })
  })

  it('handles CLOSE_MENU', () => {
    const newState = menu(
      { id: 1 },
      {
        type: CLOSE_MENU,
      }
    )
    expect(newState).toEqual({
      id: 0,
    })
  })
})
