import {
    rename as renameFile
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

const wrongFileName = join(__dirname, "files", "wrongFilename.txt");
const correctFileName = join(__dirname, "files", "properFilename.md");


const rename = async () => {

    renameFile(wrongFileName, correctFileName, (err) => {
        if (err) throw new Error("FS operation failed");
    })
    // Write your code here
};

await rename();