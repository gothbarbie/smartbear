// @flow

import axios from 'axios'
import {
  FETCH_DATA,
  OPEN_MODAL,
  CLOSE_MODAL,
  UPDATE_DATA,
  OPEN_MENU,
  CLOSE_MENU,
} from './types'

declare var process: {
  env: { REACT_APP_API_URL: string },
}

export const getData = () => async (dispatch: Dispatch<*>) => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL)

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

export const save = ({
  id,
  name,
  port,
  protocol,
}: {
  id: string,
  name: string,
  port: string,
  protocol: string,
}) => async (dispatch: Dispatch<*>) => {
  try {
    await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, {
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

export const openModal = (id: string) => (dispatch: Dispatch<*>) => {
  dispatch({
    type: OPEN_MODAL,
    payload: id,
  })
}

export const closeModal = () => (dispatch: Dispatch<*>) => {
  dispatch({
    type: CLOSE_MODAL,
  })
}

export const openMenu = (id: string) => (dispatch: Dispatch<*>) => {
  dispatch({
    type: OPEN_MENU,
    payload: id,
  })
}

export const closeMenu = () => (dispatch: Dispatch<*>) => {
  dispatch({
    type: CLOSE_MENU,
  })
}
