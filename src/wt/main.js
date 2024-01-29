import {
    Worker
} from "node:worker_threads";

import os from "node:os";

import {
    fileURLToPath
} from 'url';

import {
    dirname
} from 'path';

import {
    join
} from "node:path";


const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'worker.js');

const performCalculations = async () => {
    const ocCPU = os.cpus();
    let res = [];
    let startNum = 10;
    for (let i = 0; i < ocCPU.length; i++) {
        const promise = new Promise((resolve, reject) => {
            let worker = new Worker(filePath, {
                workerData: startNum + i,
            });
            worker
                .on("message", (data) => {
                    resolve({
                        status: "resolved",
                        data: data
                    });
                })
                .on("error", (err) => {
                    resolve({
                        status: "error",
                        data: null
                    });
                });
        });

        res.push(promise);
    }

    const results = await Promise.all(res);
    console.log(results);
};

await performCalculations();