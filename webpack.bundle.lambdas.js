const path = require('path');
const baseconfig = require('./webpack.config');

const todoGetList = {
    ...baseconfig,
    entry: {
        todoGetList: './source/lambdas/todosGetList.ts',
    },
    output: {
        ...baseconfig.output,
        path: path.resolve('./build/todosGetList'),
    },
};

module.exports = [todoGetList];
