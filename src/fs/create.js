import {
    writeFile
} from 'node:fs';

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

const projectFolder = join(__dirname, "files", "fresh.txt")

const data = 'I am fresh and young!'


const create = async () => {

    writeFile(projectFolder, data, {
        flag: "ax"
    }, (err) => {
        if (err) throw new Error("FS operation failed");
    })
};

await create();