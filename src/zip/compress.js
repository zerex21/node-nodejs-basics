import {
    pipeline
} from 'node:stream';
import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    createGzip
} from 'node:zlib';

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


const pathFileZip = [join(__dirname, 'files', 'fileToCompress.txt'), join(__dirname, 'files', 'archive.gz')]

const compress = async () => {

    pipeline(createReadStream(pathFileZip[0]), createGzip(), createWriteStream(pathFileZip[1]), (err) => {
        if (err) throw err
    });
    // Write your code here
};

await compress();