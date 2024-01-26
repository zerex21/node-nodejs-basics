import {
    createReadStream,
    createWriteStream
} from 'node:fs';
import {
    stdin,
    stdout,
} from 'node:process';


const fileWrite = new URL('./files/fileToWrite.txt',
    import.meta.url);

const write = async () => {

    const input = createReadStream(fileWrite);
    const output = createWriteStream(fileWrite);

    input.pipe(stdin).pipe(output)

};

await write();