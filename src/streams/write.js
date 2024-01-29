import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    stdin,
    stdout,
} from 'node:process';

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

const fileWrite = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {

    const input = createReadStream(fileWrite);
    const output = createWriteStream(fileWrite);

    input.pipe(stdin).pipe(output)

};

await write();