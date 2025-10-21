const PersonForm = ({ newPerson, handleInputChange, addPerson }) => (
      <form>
            <div>
                  name: <input name="name" value={newPerson.name} onChange={handleInputChange} />
                  number: <input name="number" id="phone_number" value={newPerson.number} onChange={handleInputChange} />
            </div>
            <div>
                  <button type="submit" onClick={addPerson}>add</button>
            </div>
      </form>
)
export default PersonForm