import { h } from 'hyposcript'

import { Nav } from '@/components/Nav'

export const route = '*'

export function handler() {
  return {
    statusCode: 404,
    body: (
      <>
        <Nav />
        <div>
          <h1>404</h1>
          <p>This page is dynamically rendered</p>
        </div>
      </>
    ),
  }
}
