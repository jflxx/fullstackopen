import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const hook = () => {
    personService.getAll().then(returnedPersons => setPersons(returnedPersons));
  }

  useEffect(hook,[]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}> </Filter>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}></PersonForm>
    
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}></Persons>
    </div>
  )
}

export default App