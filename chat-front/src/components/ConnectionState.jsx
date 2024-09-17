const ConnectionState = ({ isConnected }) => {
  return <p>Estado: {isConnected ? 'Conectado' : 'Desconectado'}</p>;
};

export default ConnectionState;
