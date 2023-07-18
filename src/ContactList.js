import React, { useState, useEffect } from 'react';
import './styles.css'; // Ruta al archivo CSS


const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://www.raydelto.org/agenda.php');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <div>
      <h2 >Lista de contactos</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.nombre} {contact.apellido} - {contact.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
