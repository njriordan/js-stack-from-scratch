// @flow
import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  SAY_HELLO,
  SAY_HELLO_ASYNC_REQUEST,
  SAY_HELLO_ASYNC_SUCCESS,
  SAY_HELLO_ASYNC_FAILURE,
} from '../actions/hello'

const initialState = Immutable.fromJS({
  message: 'I am the initial message',
  messageAsync: 'I am the initial async message',
})

const helloReducer = (state: Immut = initialState, action: { type: string, payload: any}) => {
  switch (action.type) {
    case SAY_HELLO:
      return state.set('message', action.payload)
    case SAY_HELLO_ASYNC_REQUEST:
      return state.set('messageAsync', 'Loading...')
    case SAY_HELLO_ASYNC_SUCCESS:
      return state.set('messageAsync', action.payload)
    case SAY_HELLO_ASYNC_FAILURE:
      return state.set('messageAsync', 'No message received, please check your connection')
    default:
      return state
  }
}

export default helloReducer
