import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log(`Cliente conectado ${client.id}`);
  }

  handleDisconnect(client: any) {
    console.log(`Cliente desconectado ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: { user: string; text: string }) {
    this.server.emit('message', message);
  }
}
