const path = require('path');
const fs = require('fs-extra');
const childProcess = require('child_process');
const baseconfig = require('./webpack.config');

const bundleDependencies = compiler => {
    compiler.hooks.afterCompile.tap('t', compilation => {
        const { name, version, dependencies } = require('./package.json');
        const packageFile = path.join(compilation.options.output.path, 'package.json');
        const packageFileContent = { private: true, name, version, dependencies };

        fs.ensureFileSync(packageFile);
        fs.writeFileSync(packageFile, JSON.stringify(packageFileContent, null, 4), { encoding: 'utf8' });
        childProcess.exec('npm install', { cwd: compilation.options.output.path }, (err, stdout, stderr) => {
            console.log();
            console.log('## installing external dependencies');
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
        });
    });
};

const todosWebAppServer = {
    ...baseconfig,
    entry: {
        todoGetList: './source/webapps/todos_webapp/server.hander.ts',
    },
    output: {
        ...baseconfig.output,
        path: path.resolve('./build/webapps/todos_webapp'),
    },
    plugins: [
        {
            apply: compiler => bundleDependencies(compiler),
        },
    ],
};

module.exports = [todosWebAppServer];
