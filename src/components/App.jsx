import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm'
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from 'nanoid';
import {Filter} from "./Filter/Filter";



export class App extends Component {
    state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

    addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact }],
    }));
  };
  //   addContact = (task) => {
  //   const searchSameName = this.state.contacts
  //     .map((contacts) => contacts.name)
  //     .includes(task.name);

  //   if (searchSameName) {
  //     alert(`${task.name} is already in contacts`);
  //   } else if (task.name.length === 0) {
  //     alert("Fields must be filled!");
  //   } else {
  //     const contact = {
  //       ...task,
  //       id: nanoid(),
  //     };

  //     this.setState((prevState) => ({
  //       contacts: [...prevState.contacts, contact],
  //     }));
  //   }
  // };

    changeFilter = (filter) => {
    this.setState({ filter });
  };

    getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };


  formSubmitHandler = data => {
    console.log(data);
  };
  
  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    
    return (

      <div >
        <h1>Phonebook</h1>
        <GlobalStyle />
        <ContactForm
          onSubmit={this.addContact}/>

        <h2>Contacts</h2>
        {visibleContacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleContacts.length > 1 && (
          <Contacts
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </div>
    );
  


//     <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   
// </div>
  // 
    // <div style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}>
    //   Evgenija
    // </div>
  
  };
};


