import { render as resolve } from 'presta/load';
import { createRouter } from 'presta/lib/router';
import { createHandler } from 'presta/lib/handler';

import * as userConfig from '/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic/presta.config.js'
import * as Template0 from '/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic/src/server.js';

export const config = Object.assign({}, userConfig, {"cwd":"/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic","pages":["/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic/src/server.js"],"output":"/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic/build","assets":"/Users/ericbailey/Sites/sure-thing/presta-examples/react-isomorphic/public"});
export const pages = [
  Template0
];
export const router = createRouter(pages, config);
export const handler = createHandler(router, config);
