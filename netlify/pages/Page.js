import { h } from 'hyposcript'
import { Box } from 'hypobox'

import { Nav } from '@/components/Nav'

export const route = '/:slug'

export function Page ({ pathname, head }) {
  head({ title: pathname })

  return (
    <>
      <Nav activePath={pathname} />

      <Box as='h1' mt={3}>
        This is server-rendered. You're on {pathname}
      </Box>
    </>
  )
}
