import { h } from 'hyposcript'
import { html } from 'presta/html'

import { Nav } from '@/components/Nav'

export const route = '/:slug?'

export async function handler(context) {
  return html({
    head: {
      title: 'Hybrid!',
    },
    body: (
      <>
        <Nav />
        <div>
          <h1>Home</h1>
          <p>This page is statically rendered</p>
        </div>
      </>
    )
  })
}
