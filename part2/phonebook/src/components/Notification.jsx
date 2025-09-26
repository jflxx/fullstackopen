const Notification = ({ message}) => {
  if (message === null) {
    return null
  }

  return (
    <div className={`error ${message.type}`}>
      {message.text}
    </div>
  )
}

export default Notification;