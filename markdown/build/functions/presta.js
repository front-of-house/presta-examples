import { createRouter } from 'presta:internal/lib/router';
import { createHandler } from 'presta:internal/lib/handler';

import * as userConfig from '/Users/ericbailey/Sites/sure-thing/presta-examples/markdown/presta.config.js'


export const config = Object.assign({}, userConfig, {"cwd":"/Users/ericbailey/Sites/sure-thing/presta-examples/markdown","files":["/Users/ericbailey/Sites/sure-thing/presta-examples/markdown/pages/*.js"],"output":"/Users/ericbailey/Sites/sure-thing/presta-examples/markdown/build","assets":"/Users/ericbailey/Sites/sure-thing/presta-examples/markdown/public"});
export const files = [
  
];
export const router = createRouter(files, config);
export const handler = createHandler(router, config);
