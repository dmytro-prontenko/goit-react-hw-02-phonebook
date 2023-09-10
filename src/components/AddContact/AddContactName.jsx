import React from 'react';

const AddContact = props => {
  const {
    inputNameChanger,
    inputNumberChanger,
    inputName,
    inputNumber,
    addContact,
  } = props;
  return (
    <>
      <h2>Name</h2>
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={inputNameChanger}
            value={inputName}
          />
        </li>
        <li>
          <label htmlFor="number">Number</label>

          <input
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={inputNumberChanger}
            value={inputNumber}
          />
        </li>
      </ul>

      <button type="submit" onClick={addContact}>
        Add contact
      </button>
    </>
  );
};

export default AddContact;
