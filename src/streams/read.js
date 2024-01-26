import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    stdout
} from 'node:process';

const fileRead = new URL('./files/fileToRead.txt',
    import.meta.url);

const read = async () => {
    const input = createReadStream(fileRead);
    input.pipe(stdout);
    // Write your code here
};

await read();