import servicePerson from '../services/persons'


const Persons = ({ persons, filter, setPersons }) => {

    const handleDelete = (id, name) =>{
        if(window.confirm(`Do you want to delete ${name}`)){
            servicePerson.deletePerson(id).then(()=>{
                servicePerson.getAll().then(returnedPersons => setPersons(returnedPersons));
            })
        }
    }

    return (
        <div>{persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map(person => (
                <div key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => handleDelete(person.id,person.name)}>delete</button>
                    <br />
                </div>
            ))}
            
        </div>
    )

}

export default Persons;