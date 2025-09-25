
import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'
const PersonForm = ({ newName, setNewName, newNumber, setNewNumber,persons,setPersons}) => {
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const exist = persons.some(person => person.name === newName || person.number === newNumber);
        if (!exist) {
            const nameObject = {
                name: newName,
                number: newNumber,
            }
            axios.post(baseURL,nameObject).then(response => {
                setPersons([...persons,response.data])
                setNewName('');
                setNewNumber('');
            })
        } else {
            alert(`${newName} is already added to phonebook`);
        }
    }

    return (
        <form>
            <div>name: <input value={newName} onChange={handleNameChange} /></div>
            <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div><button type="submit" onClick={handleOnSubmit}>add</button></div>
        </form>
    )
}

export default PersonForm;