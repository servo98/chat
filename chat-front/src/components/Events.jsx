const Events = ({ events }) => {
  return (
    // Iterar lista de mensajes
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <img
            src={`https://api.dicebear.com/9.x/identicon/svg?seed=${event.user}`}
            alt='avatar'
            style={{ maxWidth: '70px' }}
          />
          {`${event.user}: ${event.text}`}
        </li>
      ))}
    </ul>
  );
};

export default Events;
