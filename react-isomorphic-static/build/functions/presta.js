import { render as resolve } from 'presta/load';
import { createRouter } from 'presta/lib/router';
import { createHandler } from 'presta/lib/handler';

import * as userConfig from '/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic-static/presta.config.js'


export const config = Object.assign({}, userConfig, {"cwd":"/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic-static","pages":["/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic-static/src/static-pages/*.js"],"output":"/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic-static/build","assets":"/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic-static/public"});
export const pages = [
  
];
export const router = createRouter(pages, config);
export const handler = createHandler(router, config);
