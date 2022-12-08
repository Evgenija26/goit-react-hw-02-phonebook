import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm'



export class App extends Component {

  formSubmitHandler = data => {
    console.log(data);
  };
  
  render() {
    
    return (

      <div >
        <h1>Phonebook</h1>
        <GlobalStyle />
        <ContactForm onSubmit={this.formSubmitHandler()} />

        <h2>Contacts</h2>        
      </div>
    );
  
//     <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
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


