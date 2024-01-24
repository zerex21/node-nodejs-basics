import {
    rename as renameFile
} from "node:fs"
/* import {
    promises as fs
} from 'fs'; */

const wrongFileName = './files/wrongFilename.txt'
const correctFileName = './files/properFilename.md'


const rename = async () => {

    renameFile(wrongFileName, correctFileName, (err) => {
        if (err) throw new Error("FS operation failed");
    })
    // Write your code here
};

await rename();