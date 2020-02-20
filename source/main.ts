import { env, stdout } from 'process';

const main = async () => {
    stdout.write(`\nNODE_ENV is ${env.NODE_ENV}\n\n`);
    return Promise.resolve();
};

main();
