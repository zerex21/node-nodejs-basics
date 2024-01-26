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

const pathFileZip = ['../fileToCompress.txt', '../archive.gz']

const decompress = async () => {

    pipeline(createReadStream(pathFileZip[1]), createGunzip(), createWriteStream(pathFileZip[0]), (err) => {
        if (err) throw err
    })
    // Write your code here
};

await decompress();