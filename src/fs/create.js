import {
    writeFile
} from 'node:fs';
import {
    access,
    constants
} from 'node:fs';

const projectFolder = new URL('files/fresh.txt',
    import.meta.url);

const data = 'I am fresh and young'


const create = async () => {
    try {
        access(projectFolder, constants.F_OK, (err) => {
            if (!err) {
                const err = new Error('FS operation failed');
                console.error(err.message);

            } else {
                writeFile(projectFolder, data, (err) => {
                    if (err) console.log(err)
                })
            }
        });
    } catch (e) {
        console.error(err.message);
    }
};

await create();