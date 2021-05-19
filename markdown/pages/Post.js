import md from 'marked'
import { source } from 'presta/source-filesystem'

const { paths, sources } = source('**/*.md', { baseDir: '../posts' })

export function getStaticPaths () {
  return paths
}

export function handler ({ path }) {
  return md(sources[path])
}
