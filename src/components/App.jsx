import React from 'react';
import AddContact from './AddContact/AddContactName';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleNameChangeInput = e => {
    this.setState({ name: e.target.value });
  };
  handleNumberChangeInput = e => {
    this.setState({ number: e.target.value });
  };

  handleAddContact = () => {
    //TODO додати перевірку на введені значення
    const contactExists = this.state.contacts.some(
      contact => contact.name === this.state.name
    );

    if (!contactExists) {
      this.setState(prev => ({
        contacts: [
          ...prev.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
        name: '',
        number: '',
      }));
    } else {
      alert(`${this.state.name} is already exist in contacts`);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { state } = this;
    return (
      <>
        <AddContact
          addContact={this.handleAddContact}
          inputNameChanger={this.handleNameChangeInput}
          inputNumberChanger={this.handleNumberChangeInput}
          inputName={state.name}
          inputNumber={state.number}
        />
        <Filter />
        <ContactsList contacts={state.contacts} />
      </>
    );
  }
}

export default App;
