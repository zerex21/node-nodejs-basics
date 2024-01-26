import {
    Transform,
    pipeline
} from 'node:stream';

const input = process.stdin;
const output = process.stdout;

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, cb) {
            const reversedChunk = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('');
            this.push(reversedChunk + '\n');
            cb();
        },
    });

    pipeline(input, transformStream, output, (err) => {
        if (err) throw err
    });
};

await transform();