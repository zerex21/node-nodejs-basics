import {
    readFile
} from "node:fs"

const fileDelete = new URL('./files/fileToRead.txt',
    import.meta.url);

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