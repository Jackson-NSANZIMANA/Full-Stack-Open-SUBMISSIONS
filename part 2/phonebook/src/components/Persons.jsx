const Persons = ({ persons, handleDelete }) => (
      <div>
            {persons.map((person) => (
                  <li key={person.id}>
                        <p>{person.name}: {person.number}</p>
                        <button onClick={() => handleDelete(person)}>delete</button>
                  </li>
            ))}
      </div>
)

export default Persons