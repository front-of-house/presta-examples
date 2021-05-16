import { createRouter } from 'presta:internal/lib/router';
import { createHandler } from 'presta:internal/lib/handler';

const userConfig = {}
import * as Template0 from '/Users/ericbailey/Sites/sure-thing/presta-examples/presta-load/pages/index.jsx';

export const config = Object.assign({}, userConfig, {"cwd":"/Users/ericbailey/Sites/sure-thing/presta-examples/presta-load","files":["/Users/ericbailey/Sites/sure-thing/presta-examples/presta-load/pages/index.jsx"],"output":"/Users/ericbailey/Sites/sure-thing/presta-examples/presta-load/build","assets":"/Users/ericbailey/Sites/sure-thing/presta-examples/presta-load/public"});
export const files = [
  Template0
];
export const router = createRouter(files, config);
export const handler = createHandler(router, config);
