import { FETCH_DATA, UPDATE_DATA } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    case UPDATE_DATA:
      return state.map(item => {
        if (item.virtualizationID === action.payload.id) {
          const newData = { 
            apiType: action.payload.apiType,
            virtualizationID: action.payload.id,
            name: action.payload.name,
            protocol: action.payload.protocol,
            port: action.payload.port, 
            running: action.payload.running,
          }
          return { ...item, ...newData }
        }
        return item
      })
    default:
      return state
  }
}
