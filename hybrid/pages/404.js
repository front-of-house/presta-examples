import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '*'

export function createResponse({ result, ...props }) {
  return {
    ...result,
    statusCode: 404,
  }
}

export function Page() {
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
