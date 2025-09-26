import axios from 'axios'
import personsService from '../services/persons'

const baseURL = 'http://localhost:3001/persons'
const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setErrorMessage}) => {
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()

        const exist = persons.some(person => person.name === newName);
        if (!exist) {
            const nameObject = {
                name: newName,
                number: newNumber,
            }
            personsService.create(nameObject).then(returnedPerson => {
                setPersons([...persons, returnedPerson]);
                setNewName('');
                setNewNumber('');
                setErrorMessage(
                    `Added ${newName}`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })

        } else {
                if(window.confirm(`${newName} is already added to phonebook, replace the old Number with the new one`)){
                    const person = persons.find(person => person.name === newName);
                    const changedPerson = {...person, number: newNumber};
                    personsService.update(person.id,changedPerson).then(returnedPerson =>{
                        setPersons(persons.map(p => p.id !== person.id? p: returnedPerson));
                        setNewName('');
                        setNewNumber('');
                        setErrorMessage(
                            `modificated ${newName}`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    })
                }
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