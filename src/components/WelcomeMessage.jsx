const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <center>
        <h1 className="welcome-msg">There are no Posts right now</h1>
        <button type="button" className="btn btn-primary"
        onClick={onGetPostsClick}>Get Posts from Server</button>
    </center>
  )
}

export default WelcomeMessage;