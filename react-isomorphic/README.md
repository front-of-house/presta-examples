# react-isomorphic

Simple example of a React application partially built by Presta. This repo can
perform SSR and static rendering, plus provides a client-side React bundle.

## Overview

For clarity, there are two separate commands that need to be run simultaneously.

To compile the client bundle with Webpack:

```bash
npm run client:watch
```

And to build and serve the Presta application:

```bash
npm run site:watch
```

### Production

For prod, you can run `npm run build` which will compile the client bundle and
then build the Presta application. The latter copies all `/public` static files
into the `/build` directory so they're ready to be deployed.

### License

MIT License © [Sure Thing](https://github.com/sure-thing)

