import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem/PasswordItem'
import './PasswordManager.css'

let filteredlist = []

class PasswordManager extends Component {
  state = {
    passwordList: [],
    sitename: '',
    username: '',
    password: '',
    isShowPasswords: false,
  }

  onChangeSiteName = event => {
    this.setState({sitename: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  isShowPassword = event => {
    this.setState({isShowPasswords: event.target.checked})
  }

  submitFormData = event => {
    event.preventDefault()
    const {sitename, username, password, passwordList} = this.state
    const newPassword = {
      id: v4(),
      sitename,
      username,
      password,
    }
    if (sitename !== '' && username !== '' && password !== '') {
      this.setState(preState => ({
        sitename: '',
        username: '',
        password: '',
        passwordList: [...preState.passwordList, newPassword],
      }))
    }
    filteredlist = [...passwordList, newPassword]
  }

  onDelete = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(eachPass => eachPass.id !== id)
    this.setState(preState => ({...preState, passwordList: filteredList}))
  }

  onFilterList = event => {
    const filtPasswordList = filteredlist.filter(eachPass =>
      eachPass.sitename
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    )

    this.setState(preState => ({...preState, passwordList: filtPasswordList}))
  }

  render() {
    const {
      sitename,
      username,
      password,
      passwordList,
      isShowPasswords,
    } = this.state

    console.log(sitename, username, password, passwordList, isShowPasswords)
    return (
      <div className="bg-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="topcard">
          <form className="form" onSubmit={this.submitFormData}>
            <h1 className="form-headding">Add New Password</h1>
            <div className="input-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                value={sitename}
                placeholder="Enter Website"
                onChange={this.onChangeSiteName}
              />
            </div>
            <div className="input-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={this.onChangeUserName}
              />
            </div>
            <div className="input-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
            </div>
            <div className="button-container">
              <button type="submit">Add</button>
            </div>
          </form>
          <img
            className="password-manager-image-s"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
          <img
            className="password-manager-image-m"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="bottomcard">
          <div className="passwors-search-container">
            <h1>Your Passwords</h1>
            <p>{passwordList.length}</p>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                onChange={this.onFilterList}
              />
            </div>
          </div>
          <div className="check-container">
            <div className="check-container">
              <input
                type="checkbox"
                id="chechInput"
                onClick={this.isShowPassword}
              />
              <label htmlFor="chechInput">Show Passwords</label>
            </div>
          </div>
          <ul className="ul-container">
            {passwordList.length !== 0 ? (
              passwordList.map(eachPass => (
                <PasswordItem
                  key={eachPass.id}
                  eachPass={eachPass}
                  isShowPasswords={isShowPasswords}
                  onDelete={this.onDelete}
                />
              ))
            ) : (
              <div className="nopassword-container">
                <img
                  className="nopassword-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
