import React from 'react';
import AddContact from './AddContact/AddContactName';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
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

  handleAddContact = () => {
    const contactExists = this.state.contacts.some(
      contact => contact.name === this.state.name
    );
    if (this.state.name && this.state.number) {
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
    }
  };

  render() {
    const { state } = this;
    return (
      <>
        <form>
          <AddContact
            addContact={this.handleAddContact}
            inputChanger={this.handleChangeInput}
            inputName={state.name}
            inputNumber={state.number}
          />
          <Filter />
          <ContactsList contacts={state.contacts} />
        </form>
      </>
    );
  }
}

export default App;
