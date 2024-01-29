import {
    readFile
} from "node:fs"

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

const fileDelete = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {

    readFile(fileDelete, {
        encoding: "utf-8"
    }, (err, data) => {
        if (err) throw new Error("FS operation failed");

        console.log(data)
    })
    // Write your code here
};

await read();