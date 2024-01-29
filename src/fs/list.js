import {
    readdir
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

const pathsFilesFolder = join(__dirname, "files");

const list = async () => {

    readdir(pathsFilesFolder, (err, files) => {
        if (err) throw new Error("FS operation failed");
        console.log(files);
    });
    // Write your code here
};

await list();