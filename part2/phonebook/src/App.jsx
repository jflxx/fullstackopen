import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  const hook = () => {
    personService.getAll().then(returnedPersons => setPersons(returnedPersons));
  }

  const changeNotification = (type) => {
    if (type === 'added') {
      setNotification(
        { text: `Added ${newName}`, type: 'success' }
      )
    } else if (type === 'modified') {
      setNotification(
        { text: `modificated ${newName}`, type: 'success' }
      )

    } else {
      setNotification(
        { text: `Information of ${person.name} has already been removed from server`, type: 'danger' }
      )
    }

    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}></Notification>
      <Filter filter={filter} setFilter={setFilter}> </Filter>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}
        changeNotification={changeNotification} setNotification={setNotification}></PersonForm>

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} setPersons={setPersons}></Persons>
    </div>
  )
}

export default App