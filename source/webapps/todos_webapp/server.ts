import express, { Request, Response, NextFunction } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.set('content-type', 'text/html');
    res.send('<h1>Hello World</h1>');
});

export default server;
