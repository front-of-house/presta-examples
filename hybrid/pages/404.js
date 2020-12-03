import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '*'

export function createResponse(context, response) {
  return {
    ...response,
    statusCode: 404,
  }
}

export function template() {
  return (
    <>
      <Nav />
      <Box p={8}>
        <Box as="h1">404</Box>
        <Box as="p">This page is dynamically rendered</Box>
      </Box>
    </>
  )
}
