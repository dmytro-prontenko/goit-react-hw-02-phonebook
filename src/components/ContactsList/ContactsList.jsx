import React from 'react';

const ContactsList = ({ contacts }) => {
  const dataToInsert = contacts.map(contact => {
    return (
      <li className="contact-item" id={contact.id} key={contact.id}>
        {contact.name} {contact.number}
      </li>
    );
  });
  return (
    contacts.length !== 0 && (
      <>
        <h2>Contacts</h2>
        {dataToInsert}
      </>
    )
  );
};

export default ContactsList;
