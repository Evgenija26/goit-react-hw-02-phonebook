import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';



export class App extends Component {

  state = {
  contacts: [],
  name: ''
  }
  
  render() {
    
    return (

      <>
        <h1>Evgenija</h1>
        <GlobalStyle />
      </>
    );
  
  // 
  //   <div style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}>
  //     Evgenija
  //   </div>
  // );
  };
};


