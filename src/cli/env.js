const parseEnv = () => {
    const variables = process.env;

    for (let key in variables) {
        if (variables.hasOwnProperty(key)) {
            console.log(`Rss_${key} = ${variables[key]}`)
        }
    }
    // Write your code here
};

parseEnv();