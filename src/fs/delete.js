import {
    unlink
} from "node:fs"

const fileDelete = new URL('./files/fileToRemove.txt',
    import.meta.url);

const remove = async () => {
    unlink(fileDelete, (err) => {
        if (err) throw new Error("FS operation failed");
    })
    // Write your code here
};

await remove();