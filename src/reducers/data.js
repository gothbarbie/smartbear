import { FETCH_DATA, UPDATE_DATA } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    case UPDATE_DATA:
      return state.map(item => {
        if (item.virtualizationID === action.payload.id) {
          return { ...item, ...action.payload }
        }
        return item
      })
    default:
      return state
  }
}
