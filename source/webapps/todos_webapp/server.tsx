import express, { Request, Response, NextFunction } from 'express';
import { readFileSync, readdirSync, statSync } from 'fs';
import { resolve as pathResolve, join as pathJoin } from 'path';
import { env } from 'process';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './public/App';

const server = express();

const WORK_DIR = env.LAMBDA_TASK_ROOT ? env.LAMBDA_TASK_ROOT : __dirname;
const TEMPLATE_FILE = readFileSync(pathResolve(pathJoin(WORK_DIR, 'index.html')), { encoding: 'utf8' });

server.get('**', (req: Request, res: Response) => {
    res.set('content-type', 'text/html');
    const html = renderToString(<App config={{ test: 'abc123' }} />);
    const finalhtml = TEMPLATE_FILE.replace('<!--#_CONTENT_#-->', html);
    res.send(finalhtml);
});

export default server;
