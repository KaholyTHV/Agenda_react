import React, { useState } from 'react';

const AddContact = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: name,
          apellido: lastName,
          telefono: phone,
        }),
      });

      if (response.ok) {
        setName('');
        setLastName('');
        setPhone('');
        alert('Contact added successfully!');
      } else {
        alert('Failed to add contact.');
      }
    } catch (error) {
      console.error('Error adding contact:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h2>Añadir conctato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
        />

        <button type="submit">Añadir conctato</button>
      </form>
    </div>
  );
};

export default AddContact;
