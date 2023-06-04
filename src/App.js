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

  return (
    <div>
      <h2>Phonebook</h2>
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