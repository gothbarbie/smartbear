import { CLOSE_MODAL, OPEN_MODAL } from '../actions/types'

export default (state = { id: 0 }, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { id: action.payload }
    case CLOSE_MODAL: 
      return { id: 0 }
    default:
      return state
  }
}
