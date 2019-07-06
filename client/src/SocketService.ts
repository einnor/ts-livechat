import io from 'socket.io-client';
import { ChatMessage } from './types';
import { fromEvent, Observable } from 'rxjs';

export class SocketService {
    private socket: SocketIOClient.Socket = {} as SocketIOClient.Socket;

    public init (): SocketService {
        console.log('initiating socket service');
        this.socket = io('localhost:8080');
        return this;
    }
};
