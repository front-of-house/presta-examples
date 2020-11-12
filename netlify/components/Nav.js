import { h } from 'hyposcript'
import { Box } from 'hypobox'
import { load } from 'presta/load'

export function Nav ({ activePath }) {
  const links = load(
    () => {
      return new Promise(y => {
        setTimeout(
          () =>
            y([
              {
                href: '/',
                label: 'Home'
              },
              {
                href: '/one',
                label: 'Page One'
              },
              {
                href: '/two',
                label: 'Page Two'
              }
            ]),
          100
        )
      })
    },
    { key: 'nav' }
  )

  if (!links) return

  return (
    <Box f aic>
      {links.map(({ href, label }) => (
        <Box
          as='a'
          href={href}
          mr={2}
          style={{
            color: (href === activePath ? 'magenta' : 'blue') + '!important'
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  )
}
