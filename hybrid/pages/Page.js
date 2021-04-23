import { h } from 'hyposcript'

import { Nav } from '@/components/Nav'

export const route = '/:slug'

export function getStaticPaths() {
  return [
    '/about'
  ]
}

export function handler(ctx) {
  const isAbout = /about$/.test(ctx.path)

  return (
    <>
      <Nav />
      <div>
        <h1>{isAbout ? 'About' : `Page - ${ctx.path}`}</h1>
        <p>This page is {isAbout ? 'statically' : 'dynamically'} rendered</p>
        <pre>{JSON.stringify(ctx, null, '  ')}</pre>
      </div>
    </>
  )
}
