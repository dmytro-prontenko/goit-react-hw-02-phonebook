import Filter from 'components/Filter/Filter';
import React from 'react';

const ContactsList = ({ contacts, onChange }) => {
  const dataToInsert = contacts.map(contact => {
    return (
      <li className="contact-item" id={contact.id} key={contact.id}>
        {contact.name} {contact.number}
      </li>
    );
  });
  return (
    <>
      <ul className="contacts-list">{dataToInsert}</ul>
    </>
  );
};

export default ContactsList;
