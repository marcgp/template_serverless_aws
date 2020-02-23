const path = require('path');
const baseconfig = require('./webpack.config');

const todoGetList = {
    ...baseconfig,
    entry: {
        todoGetList: './source/lambdas/todosGetList.ts',
    },
    output: {
        ...baseconfig.output,
        path: path.resolve('./build/lambdas/todosGetList'),
    },
};

module.exports = [todoGetList];
