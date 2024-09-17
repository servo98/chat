import { socket } from '../socket';

const ConnectionManager = () => {
  const handleConnectButton = () => {
    socket.connect();
  };
  const handleDisconnectButton = () => {
    socket.disconnect();
  };

  return (
    <div>
      <button onClick={handleConnectButton}>Conectar</button>
      <button onClick={handleDisconnectButton}>Desconectar</button>
    </div>
  );
};

export default ConnectionManager;
