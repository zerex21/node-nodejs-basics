import {
    fork
} from 'node:child_process'

import {
    fileURLToPath
} from 'url';

import {
    dirname
} from 'path';

import {
    join
} from "node:path";


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async (args) => {
    // Write your code here
    fork(join(__dirname, "files", "script.js"), args);

};

// Put your arguments in function call to test this functionality
spawnChildProcess([42, 'asd', true]);