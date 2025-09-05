import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')


  const handleNameChange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    
    const exist = persons.some(person => person.name === newName);

    if (!exist) {
      const nameObject = {
        name: newName
      }
      setPersons([...persons,nameObject]);
      setNewName('');
    }else{
      alert(`${newName} is already added to phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={handleOnSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => {
        return (<div key={person.name}>{person.name}<br /></div>)
      })}
    </div>
  )
}

export default App