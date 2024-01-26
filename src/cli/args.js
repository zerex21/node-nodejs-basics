const parseArgs = () => {
    const args = process.argv;
    let results = [];
    for (let i = 0; i < args.length; i += 2) {
        let res = `${args[i].slice(2)} is ${args[i + 1]}`;
        results.push(res);
    }

    console.log(results.join('\n'));

};

parseArgs();