import * as express from 'express';
import * as socketIo from 'socket.io';
import { ChatEvent } from './constants';
import { ChatMessage } from './types';
import { createServer, Server } from 'http';
var cors = require('cors');

export class ChatServer {
    public static readonly PORT: number = 8080;
    private _app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;
}
