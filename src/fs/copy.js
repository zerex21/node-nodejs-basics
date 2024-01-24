import {
    cp,
    stat
} from 'node:fs';

const pathsToCheck = ['./files', './files_copy'];

const copy = async () => {

    cp(pathsToCheck[0], pathsToCheck[1], {
        recursive: true,
        force: false,
        errorOnExist: true
    }, (err) => {
        if (err) throw new Error("FS operation failed");
    });
};

await copy();