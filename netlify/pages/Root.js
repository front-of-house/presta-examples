import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { load } from 'presta/load'

import { Nav } from '@/components/Nav'

export function getPaths () {
  return ['/']
}

export function Page ({ pathname, head }) {
  const page = load(
    () => {
      return new Promise(y => {
        setTimeout(() => y({ title: 'Home Page' }), 100)
      })
    },
    { key: 'index' }
  )

  if (!page) return

  head({ title: page.title })

  return (
    <>
      <Nav activePath={pathname} />

      <Box as='h1' mt={3}>
        This page is static-rendered. You're on /, the {page.title}.
      </Box>
    </>
  )
}
