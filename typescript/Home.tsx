import { h } from 'hyposcript'

export const route = '*'

export function handler(ctx: any) {
  return {
    html: <h1>Hello world!</h1>
  }
}
