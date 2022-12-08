import React from "react";

export class ContactForm extends React.Component {
    state = {
    contacts: [],
    name: '',
    number: '',
    
  };

  // Отвечает за обновление состояния
    handleChange = e => {
      const { name, value} = e.carentTarget 
    this.setState({ [name]: value });
  };

  // Вызывается при отправке формы
  handleSubmit = evt => {
    evt.preventDefault();

    // Проп который передается форме для вызова при сабмите
      this.props.onSubmit({ ...this.state });
      
      this.reset();
    };
    
    reset = () => {
        this.setState({contacts: [],
    name: ''})
    }

  render() {

    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Name
          <input
            type="text"
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          
        </label>

        <button type="submit" className="Button">Add contact </button>
      </form>
    );
  }
}

// ReactDOM.render(
//   <SignUpForm onSubmit={values => console.log(values)} />,
//   document.getElementById("root")
// );