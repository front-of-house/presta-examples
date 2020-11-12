# presta-netlify

A simple demo of [presta](https://github.com/sure-thing/presta),
[hyposcript](https://github.com/sure-thing/hyposcript), and
[hypobox](https://github.com/sure-thing/hypobox), running within a Netlify
environment.

### Notes
- home page is statically rendered using `presta`
- any other route will be rendered using a single serverless function
- the pages & component asynchronously "load" data (just a setTimeout for demo)
    - loads to memory, with option to save to local file cache for fast rebuilds
        in watch mode
- document `head` data is managed on a per-page basis
- `presta.runtime.js`
    - used internally by `presta` static build, but is
      repurposed in `server/index.js` to produce consistent HTML files
    - extracts CSS from `hypobox` and inserts into `<head>`
    - extracts data fro `presta/load` and adds to window object for hydration
    - uses a handy `document` builder from `presta`

## Running

Clone this repo locally, then run:

```bash
npm run build && npm run serve
```

And you should be off and running.

#### Watch Mode

To try watch mode, you'll need to run multiple processes in multiple terminal
windows.

1. run static build watch task: `npm run static:watch`
2. run serverless compilation: `npm run server:watch`
3. run netlify server: `npm run serve`

Any edits you make to the `Root.js` page should statically render. Any edits to
`Page.js` or `server/index.js` should update the dynamically rendered pages.

**Note:** `netlify dev` doesn't not live-reload, so you'll need to manually
refresh every time. Can probably improve this.
