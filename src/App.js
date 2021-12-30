import './App.css';
import React,{Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/form'
import ContactsList from './components/contactsList'
class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  formSubmitHandler = data => {
    this.repeatControl(data);
  };
  deleteItem= Id =>{
   this.setState(prevState=>({
     contacts:prevState.contacts.filter(contact=>contact.id!==Id)
   }))
  }
  repeatControl = data => {
    let nameArray = [];
    nameArray = this.state.contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      let arrayCont = [];
      arrayCont = [
        ...this.state.contacts,
        { id:  uuidv4(), name: data.name, number: data.number },
      ];
      return this.setState({ ...this.state, contacts: arrayCont });
    } else {
      alert(' Контакт вже є у телефонній книзі!!!');
    }
  };
  render(){
    return(
      <div>
      <Form onSubmitData={this.formSubmitHandler}/>
      <ContactsList contacts={this.state.contacts} onDeleteItem={this.deleteItem} />
      </div>
    );
  }
}
export default App;