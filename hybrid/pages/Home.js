import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export function getStaticPaths() {
  return ['/']
}

export function template() {
  return (
    <>
      <Nav />
      <Box p={8}>
        <Box as="h1">Home</Box>
        <Box as="p">This page is statically rendered</Box>
      </Box>
    </>
  )
}
