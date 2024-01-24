import {
    readdir
} from "node:fs"

const pathsFilesFolder = './files';

const list = async () => {

    readdir(pathsFilesFolder, (err, files) => {
        if (err) throw new Error("FS operation failed");
        console.log(files);
    });
    // Write your code here
};

await list();