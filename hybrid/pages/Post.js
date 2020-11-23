import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '/posts/:slug'

export function Page({ pathname }) {
  return (
    <>
      <Nav />
      <Box p={8}>
        <Box as="h1">Post - {pathname}</Box>
        <Box as="p">This page is dynamically rendered</Box>
      </Box>
    </>
  )
}
