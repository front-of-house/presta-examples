export const route = '/api/debug'

export async function handler(context) {
  return {
    json: context
  }
}
