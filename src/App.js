import React, { useState } from 'react';
import Person from './Person';

function App() {

  const [persons, setPersons] = useState([
    {name: 'Sathish', number: 9080706050}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    
    // create a new Object
    let person = {
      name: newName,
      number: newNumber
    };

    let allNames = persons.map(person => person.name);
    
    if (!allNames.includes(person.name)) {
      setPersons(persons.concat(person));
    } else {
      alert(`${person.name} already added to phonebook`);
    }
    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterByName = (event) => {

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        Filter By Name: <input onChange={handleFilterByName}/>
      </div>

      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>

        <div>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      <ul>
        {
          persons.map(person => <Person name={person.name} number={ person.number } />)
        }
      </ul>


    </div>
  )
}

export default App;

// Next tasks

/*
  1. Implement a filter search box, which filters the phone book by person name
  2. Move the data to db.json so that you will have a json backend server
  3. Add the numbers to the backend
  4. Update component that lets the users to update the phone book record
  5. Delete entries from the phonebook
*/