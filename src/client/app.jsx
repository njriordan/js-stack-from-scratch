// @flow

import React from 'react'
import HelloButton from './containers/hello-button'
import HelloAsyncButton from './containers/hello-async-button'
import Message from './containers/message'
import MessageAsync from './containers/message-async'
import { APP_NAME } from '../shared/config'

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>
)

export default App
