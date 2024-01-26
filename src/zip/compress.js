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

const pathFileZip = ['./files/fileToCompress.txt', '../archive.gz']

const compress = async () => {

    pipeline(createReadStream(pathFileZip[0]), createGzip(), createWriteStream(pathFileZip[1]), (err) => {
        if (err) throw err
    });
    // Write your code here
};

await compress();