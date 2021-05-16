import { h } from 'hyposcript'
import { load } from '@presta/load'

import { loadPosts } from '@/api/posts'

export function Posts() {
  const posts = load(loadPosts, { key: 'posts' }) || []

  return posts.map(post => (
    <h3>{post.title}</h3>
  ))
}
