import './App.css';
import React,{Component} from 'react';
import { nanoid } from 'nanoid'



/*
 * Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
 * Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
 */
let contact={
  contactName:[],
};


class SignUpForm extends React.Component {
  state = {
    contacts: [],
  name: '',
  number: ''
  };

  /* ... */
  // input change
onChangeInput= e =>{
  e.preventDefault();
this.setState({name:e.target.value})

}
// formChange
SubmitForm = e =>{
  e.preventDefault();
this.props.onSubmit(this.state.name)
this.contact


}
itemid = nanoid(10)

  render() {
    const {name}=this.state;
    
    return (
      <div>
      <form onSubmit={this.SubmitForm}>
      <input
      onChange={this.onChangeInput}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />    
<button type='submit'>send</button>
       </form>
       <ul>
             <li>
    
     <p>{name}</p>
             </li>
         
       </ul>
            </div>

      );
  }
}



export default SignUpForm;
