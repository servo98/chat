import { useState } from 'react';
import { socket } from '../socket';

const Form = () => {
  const [isFirstMessageSent, setIsFirstMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    user: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setIsFirstMessageSent(true);
    e.preventDefault();
    if (formData.user && formData.text) {
      socket.emit('message', formData);
      setFormData({
        ...formData,
        text: '',
      });
    }
  };

  return (
    <div>
      <form>
        <label>Usuario</label>
        <input
          type='text'
          name='user'
          onChange={handleChange}
          value={formData.user}
          disabled={isFirstMessageSent}
        />
        <br />
        <label>Mensaje</label>
        <input
          type='text'
          name='text'
          onChange={handleChange}
          value={formData.text}
        />
        <button type='submit' onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
