import { useState, useEffect } from 'react'
import { addUser, deleteUser, getAllUsers } from './axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({ name: '', number: '' })
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState({ message: '', type: '' })  // Notification state

  useEffect(() => {
    getAllUsers().then(response => setPersons(response.data))
  }, [])

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification({ message: '', type: '' })
    }, 3000)  // Hide after 3 seconds
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())) {
      if (window.confirm(`${newPerson.name} is already added to phonebook. Would you like to change their phone number instead?`)) {
        addUser(newPerson).then(() => {
          getAllUsers().then(response => setPersons(response.data))
          showNotification(`${newPerson.name} updated!`, 'success')
        })
      }
    } else {
      addUser(newPerson).then(() => {
        getAllUsers().then(response => setPersons(response.data))
        showNotification(`${newPerson.name} added!`, 'success')
      })
    }
    setNewPerson({ name: '', number: '' })
  }

  const handleInputChange = (event) => {
    setNewPerson({ ...newPerson, [event.target.name]: event.target.value })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (person) => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      deleteUser(person.id).then(() => {
        getAllUsers().then(response => setPersons(response.data))
        showNotification(`${person.name} deleted!`, 'success')
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search} handleSearch={handleSearch} />

      <h3>Add a new</h3>
      <PersonForm
        newPerson={newPerson}
        handleInputChange={handleInputChange}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />

      {/* Notification Component */}
      <Notification message={notification.message} type={notification.type} />
    </div>
  )
}

export default App
