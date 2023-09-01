import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    first: 'Alwyn',
    last: 'Madiba'
  }

  const nameList = [
    {
      first: 'Alwyn',
      last: 'Madiba'
    },
    {
      first: 'Nelson',
      last: 'Osho'
    },
    {
      first: 'Alfred',
      last: 'Sadhguru'
    }
  ]

  return (
    <div className="App">
      <Greet name="Alwyn" messageCount={12} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
