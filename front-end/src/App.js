import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navBar'
import './App.css';
import UsersContainer from './containers/usersContainer';
import { Home } from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';
import showsContainer from './containers/showsContainer';
import { About } from './components/About/About';
import AddShowForm from './components/AddShowForm/AddShowForm';
import ShowInfoPage from './components/ShowInfoPage/ShowInfoPage';
import AuthContainer from './containers/authContainer'
import axios from 'axios'
import { logOut } from './store/actions/userActions';
import { connect } from 'react-redux'
import { PrivateRoute } from './components/AuthComponents/PrivateRoute'
import ChatInput from './Chat/chatInput'
import { Profile } from './components/Profile/Profile'
class App extends React.Component {


  logoutUser = async () => {
    try {
      await axios.get('/api/auth/logout')
      this.props.logOut(null)
      this.props.history.push('/')
    } catch (error) {
      console.log('error', error);
    }
  }

  renderAuthContainer = (routeProps) => <AuthContainer {...routeProps} />


  render() {
    return (
      <div className="App">
        <Navbar logoutUser={this.logoutUser}
          isUserLoggedIn={this.props.loggedUser.isUserLoggedIn}
        />



        <Switch>
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <PrivateRoute path='/profile' component={Profile} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <PrivateRoute path='/users/:id' component={UserPage} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <PrivateRoute path='/users' component={UsersContainer} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <PrivateRoute path='/addShow' component={AddShowForm} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <PrivateRoute path='/shows/:id/user/:userId' component={ShowInfoPage} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <PrivateRoute path='/shows' component={showsContainer} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <PrivateRoute path='/chat' component={ChatInput} isUserLoggedIn={this.props.loggedUser.isUserLoggedIn} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.usersReducer.loggedUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: data => dispatch(logOut(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
