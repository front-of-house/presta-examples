import { h } from 'hyposcript'

import { Nav } from '@/components/Nav'

export const route = '/posts/:slug'

export function handler(ctx) {
  return {
    statusCode: 200,
    html: (
      <>
        <Nav />
        <div>
          <h1>Post - {ctx.path}</h1>
          <p>This page is dynamically rendered</p>
          <pre>{JSON.stringify(ctx, null, '  ')}</pre>
        </div>
      </>
    ),
  }
}
