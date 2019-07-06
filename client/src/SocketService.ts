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

    // send a message for the server to broadcast
    public send (message: ChatMessage): void {
        console.log('emitting message: ' + message);
        this.socket.emit('message', message);
    }
};
