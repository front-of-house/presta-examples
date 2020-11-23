import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '/:slug'

export function getPaths() {
  return [
    '/about'
  ]
}

export function Page({ pathname }) {
  const isAbout = /about$/.test(pathname)

  return (
    <>
      <Nav />
      <Box p={8}>
        <Box as="h1">{isAbout ? 'About' : `Page - ${pathname}`}</Box>
        <Box as="p">This page is {isAbout ? 'statically' : 'dynamically'} rendered</Box>
      </Box>
    </>
  )
}
