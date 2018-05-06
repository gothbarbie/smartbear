import axios from 'axios'
import { FETCH_DATA, OPEN_MODAL, CLOSE_MODAL, UPDATE_DATA, OPEN_MENU, CLOSE_MENU } from './types'

const API_URL = 'http://localhost:8090/sv/v1/virtualizations'

export const getData = () => async dispatch => {
  try {
    const res = await axios.get(API_URL)

    if (res.data.hasOwnProperty('virtualizationList')) {
      dispatch({
        type: FETCH_DATA,
        payload: res.data.virtualizationList,
      })
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const save = ({ id, name, port, protocol }) => async dispatch => {
  try {
    await axios.put(`${API_URL}/${id}`, {
      name,
      port,
      protocol,
    })
    dispatch({
      type: UPDATE_DATA,
      payload: { id, name, port, protocol },
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const openModal = id => dispatch => {
  dispatch({
    type: OPEN_MODAL,
    payload: id,
  })
}

export const closeModal = () => dispatch => {
  dispatch({
    type: CLOSE_MODAL,
  })
}

export const openMenu = id => dispatch => {
  dispatch({
    type: OPEN_MENU,
    payload: id,
  })
}

export const closeMenu = () => dispatch => {
  dispatch({
    type: CLOSE_MENU,
  })
}
