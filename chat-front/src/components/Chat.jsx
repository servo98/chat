import { socket } from '../socket';

import ConnectionState from './ConnectionState';
import Events from './Events';
import ConnectionManager from './ConnectionManager';
import Form from './Form';
import { useEffect, useState } from 'react';

const Chat = () => {
  //Estado de mi conexión
  const [isConnected, setIsConnected] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
    };
    const onDiscconnet = () => {
      setIsConnected(false);
    };
    const onMessage = (message) => {
      setEvents((prev) => [...prev, message]);
    };

    //Suscripción a los eventos del socket
    socket.on('connect', onConnect);
    socket.on('disconnect', onDiscconnet);
    socket.on('message', onMessage);
    return () => {
      // Anulamos subscripción a los eventos del socket para evitar eventos duplicados
      socket.off('connect', onConnect);
      socket.off('disconnect', onDiscconnet);
      socket.off('message', onMessage);
    };
  }, []);

  return (
    <div>
      {/* Componente del estado de conexión */}
      <ConnectionState isConnected={isConnected} />
      {/* Lista de mensajes */}
      <Events events={events} />
      {/* Botones de conectar y desconectar */}
      <ConnectionManager />
      {/* Inputs para mandar mensajes */}
      <Form />
    </div>
  );
};

export default Chat;
