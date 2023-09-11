import Filter from 'components/Filter/Filter';
import React from 'react';

const ContactsList = ({ contacts, deleteContact }) => {
  const dataToInsert = contacts.map(contact => {
    return (
      <li className="contact-item" id={contact.id} key={contact.id}>
        <span className="contact-name">
          {contact.name} {contact.number}
        </span>
        <button onClick={() => deleteContact(contact.id) } type="button">
          Delete
        </button>
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
