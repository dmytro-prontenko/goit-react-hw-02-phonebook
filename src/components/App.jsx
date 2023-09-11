import React from 'react';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

class App extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChangeInput = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddContact = ({ name, number }) => {
    const contactExists = this.state.contacts.some(
      contact => contact.name === name
    );
    if (name && number) {
      if (!contactExists) {
        this.setState(prev => ({
          contacts: [...prev.contacts, { id: nanoid(), name, number }],
          name: '',
          number: '',
        }));
        toast.success(`${name} was added to contacts`);
      } else {
        toast.error(`${name} is already exist in contacts`);
        this.setState({ name: '', number: '' });
      }
    }
  };

  filteredContact = () => {
    return (this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase())))
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredData = this.filteredContact()
    return (
      <div className='wrapper'>
      <h1>Phonebook</h1>
        <Form addContact={this.handleAddContact} />
        {contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter onChange={this.handleChangeInput} filter={filter}/>
            <ContactsList contacts={filteredData} />
          </>
        ) : (
          'There are no contacts'
        )}
      </div>
    );
  }
}

export default App;
