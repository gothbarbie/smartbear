import { CLOSE_MENU, OPEN_MENU } from '../actions/types'

export default (state = { id: 0 }, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return { id: action.payload }
    case CLOSE_MENU:
      return { id: 0 }
    default:
      return state
  }
}
