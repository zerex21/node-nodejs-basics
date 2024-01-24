import {
    writeFile
} from 'node:fs';
import {
    access,
    constants
} from 'node:fs';

const projectFolder = new URL('files/fresh.txt',
    import.meta.url);

const data = 'I am fresh and young!'


const create = async () => {

    writeFile(projectFolder, data, {
        flag: "ax"
    }, (err) => {
        if (err) throw new Error("FS operation failed");
    })
};

await create();