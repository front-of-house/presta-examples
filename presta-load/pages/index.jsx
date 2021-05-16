import { h } from 'hyposcript'
import { html } from 'presta/html'
import { flush } from 'presta/load'

import { Nav } from '../components/Nav'
import { Posts } from '../components/Posts'

export const route = '*'

export async function handler (ctx) {
  const { data, content } = await flush(() => (
    <>
      <Nav />
      <Posts />
    </>
  ))

  return {
    html: html({
      body: content,
      foot: {
        script: [
          { id: 'hydrate', children: JSON.stringify(data) }
        ]
      }
    })
  }
}
