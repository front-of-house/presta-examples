import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Nav() {
  return (
    <Box px={8} py={4} f aic>
      <Box as="a" href="/" mr={4}>Home</Box>
      <Box as="a" href="/about" mr={4}>About</Box>
      <Box as="a" href="/contact" mr={4}>Contact</Box>
      <Box as="a" href="/posts/one" mr={4}>First Post</Box>
      <Box as="a" href="/foo/bar/baz" mr={4}>Not Found</Box>
    </Box>
  )
}
