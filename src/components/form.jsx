import React from "react";
class SignUpForm extends React.Component {
    state = { 
      contacts: [],
      name: '',
      number: ''
     };
  
    /*
     * Для всех инпутов создаем один обарботчик
     * Различать инпуты будем по атрибуту name
     */
    handleChange = ({ target }) => {
      const { name, value } = target;
  
      this.setState({ [name]: value });
    };
  
    handleSubmit = evt => {
      evt.preventDefault();
  
      const { name, number } = this.state;
  
      console.log(`
        Name: ${name}
        Number: ${number}
      `);
  
      this.props.onSubmitData({ ...this.state });
      this.reset();
    };
  
    reset = () => {
      this.setState({name:'',number:''});
    };
  
    render() {
      const { name, number } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="text"
              placeholder="Enter password"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
  
          <button type="submit">Add contact:{name}</button>
        </form>
      );
    }
  }
  
  export default SignUpForm;