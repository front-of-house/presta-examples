import React from 'react'
import { Route } from 'react-router'

import { Nav } from '@/src/components/Nav'
import { Home } from '@/src/pages/Home'
import { Page } from '@/src/pages/Page'

export function App() {
  return (
    <>
      <Nav />

      <Route exact path="/" component={Home} />
      <Route exact path="/:slug" component={Page} />
    </>
  )
}
