import { h } from 'hyposcript'

export function Nav() {
  return (
    <div style='display: flex'>
      <a href="/" mr={4}>Home</a>
      <a href="/about" mr={4}>About</a>
      <a href="/contact" mr={4}>Contact</a>
      <a href="/posts/one" mr={4}>First Post</a>
      <a href="/foo/bar/baz" mr={4}>Not Found</a>
      <a href="/api/debug" mr={4}>Debug Context</a>
    </div>
  )
}
