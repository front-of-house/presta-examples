import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '/:slug'

export function getStaticPaths() {
  return [
    '/about'
  ]
}

export function template(ctx) {
  const isAbout = /about$/.test(ctx.path)

  return (
    <>
      <Nav />
      <Box p={8}>
        <Box as="h1">{isAbout ? 'About' : `Page - ${ctx.path}`}</Box>
        <Box as="p">This page is {isAbout ? 'statically' : 'dynamically'} rendered</Box>
        <Box as="pre">{JSON.stringify(ctx, null, '  ')}</Box>
      </Box>
    </>
  )
}
