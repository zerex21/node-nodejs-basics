import {
    parentPort,
    workerData,
    Worker,
} from 'node:worker_threads';

import {
    fileURLToPath
} from 'url';
import {
    dirname
} from 'path';

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = dirname(__filename);
// n should be received from main thread

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);



const sendResult = () => {

    parentPort.postMessage(nthFibonacci(workerData));

};

sendResult();