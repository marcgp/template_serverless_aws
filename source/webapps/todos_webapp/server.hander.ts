// 'use strict';
// const awsServerlessExpress = require('aws-serverless-express');
// const app = require('./app');
// const binaryMimeTypes = ['application/octet-stream', 'font/eot', 'font/opentype', 'font/otf', 'image/jpeg', 'image/png', 'image/svg+xml'];
// const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);
// exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);

import app from './server';
import awsServerlessExpress from 'aws-serverless-express';

const binaryMimeTypes = ['application/octet-stream', 'font/eot', 'font/opentype', 'font/otf', 'image/jpeg', 'image/png', 'image/svg+xml'];

const server = awsServerlessExpress.createServer(app, undefined, binaryMimeTypes);
const handler = (event: any, context: any) => awsServerlessExpress.proxy(server, event, context);

export { handler };
