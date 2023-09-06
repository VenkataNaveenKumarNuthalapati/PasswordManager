import './PasswordItem.css'

const PasswordItem = props => {
  const {eachPass, isShowPasswords, onDelete} = props
  const {id, sitename, username, password} = eachPass

  return (
    <li className="card">
      <h1>{sitename[0]}</h1>
      <div className="text-container">
        <p>{sitename}</p>
        <p>{username}</p>
        {isShowPasswords ? (
          <p>{password}</p>
        ) : (
          <img
            className="password"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button type="submit" onClick={() => onDelete(id)} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
