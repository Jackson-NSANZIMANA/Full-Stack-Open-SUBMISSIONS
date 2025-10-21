import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'
const getAllUsers = () => {
  return axios.get(baseUrl)
}
const addUser = (newPerson) => {
  return axios.post(baseUrl, newPerson)
}
const updateUser = (id) => {}
const deleteUser = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export { getAllUsers, addUser, updateUser, deleteUser }
