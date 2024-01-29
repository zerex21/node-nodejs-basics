import {
    pipeline
} from 'node:stream';
import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    createGunzip
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

const pathFileZip = [join(__dirname, 'fileToCompress.txt'), join(__dirname, 'files', 'archive.gz')]


const decompress = async () => {

    pipeline(createReadStream(pathFileZip[1]), createGunzip(), createWriteStream(pathFileZip[0]), (err) => {
        if (err) throw err
    })
    // Write your code here
};

await decompress();