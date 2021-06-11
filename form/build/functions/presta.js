import { createRouter } from 'presta:internal/lib/router';
import { createHandler } from 'presta:internal/lib/handler';

const userConfig = {}
import * as Template0 from '/Users/ericbailey/Sites/sure-thing/presta-examples/form/pages/Home.js';
import * as Template1 from '/Users/ericbailey/Sites/sure-thing/presta-examples/form/pages/Success.js';

export const config = Object.assign({}, userConfig, {"cwd":"/Users/ericbailey/Sites/sure-thing/presta-examples/form","files":["/Users/ericbailey/Sites/sure-thing/presta-examples/form/pages/*.js"],"output":"/Users/ericbailey/Sites/sure-thing/presta-examples/form/build","assets":"/Users/ericbailey/Sites/sure-thing/presta-examples/form/public"});
export const files = [
  Template0,
  Template1
];
export const router = createRouter(files, config);
export const handler = createHandler(router, config);
