import React from 'react'
import { StaticRouter } from 'react-router'

import { App } from '@/src/App'

export function getStaticPaths() {
  return ['/']
}

export function template({ path, routerContext }) {
  return (
    <div id="root">
      <StaticRouter location={path} context={routerContext}>
        <App />
      </StaticRouter>
    </div>
  )
}
