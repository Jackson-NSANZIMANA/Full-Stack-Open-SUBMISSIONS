const Filter = ({ search, handleSearch }) => (
      <div>
            Show names with <input value={search} onChange={handleSearch} />
      </div>
)

export default Filter