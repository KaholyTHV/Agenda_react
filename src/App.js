import React from 'react';
import './styles.css';
import AddContact from './AddContact';
import ContactList from './ContactList';

const  App = () => {
  return (
    <div>
      <h1>Agenda Web</h1>
      <AddContact />
      <ContactList />
    </div>
  );
};

export default App;

