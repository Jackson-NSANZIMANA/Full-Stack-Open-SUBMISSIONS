const Notification = ({ message, type }) => {
      if (!message) return null

      // Apply a basic style for success and error notifications
      const notificationStyle = {
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
            backgroundColor: type === 'error' ? 'lightcoral' : 'lightgreen',
            color: 'white',
            border: '1px solid darkgray',
      }

      return <div style={notificationStyle}>{message}</div>
}

export default Notification
