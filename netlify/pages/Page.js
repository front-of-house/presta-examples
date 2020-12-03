import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '/:slug'

export function template (ctx) {
  ctx.head({ title: ctx.path })

  return (
    <>
      <Nav activePath={ctx.path} />

      <Box as='h1' mt={3}>
        This is server-rendered. You're on {ctx.path}
      </Box>
      <Box as="pre">{JSON.stringify(ctx, null, '  ')}</Box>
    </>
  )
}
