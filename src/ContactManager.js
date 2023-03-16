import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { useState } from 'react';

function AddPersonForm(props){
  const [person, setPerson] = useState("");
  
  function handleChange(e){
    setPerson(e.target.value);
  }

  function handleSubmit(e){
    props.handleSubmit(person)
    setPerson('');
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Add new contact' onChange={handleChange} value={person}></input>
    <button type="submit">Add</button>
    </form>
}

function PeopleList(props){
  const arr = props.data;
  const listItems = arr.map((value,index)=>
  <li key="index">{value}</li>)
  return <ul>{listItems}</ul>
}

function ContactManager(props){
  const [contacts, setContact] = useState(props.data);

  function addPerson(name){
    setContact([...contacts,name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts}/>
    </div>
  );
}

 const contacts = ["James Smith","Thomas Anderson","Bruce Wayne"];

export default <ContactManager/>