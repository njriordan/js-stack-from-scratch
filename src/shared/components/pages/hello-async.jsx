// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloAsyncButton from '../../containers/hello-async-button'
import MessageAsync from '../../containers/message-async'

const title = 'Async Hello Page'

const HelloAsyncPage = () => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <MessageAsync />
        <HelloAsyncButton />
      </div>
    </div>
  </div>
)

export default HelloAsyncPage
