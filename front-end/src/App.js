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

class App extends React.Component {



  renderAuthContainer = (routeProps) => <AuthContainer setUser={this.setUser}{...routeProps} isUserLoggedIn={this.state.isUserLoggedIn} />


  render() {
    return (
      <div className="App">
        <Navbar />



        <Switch>
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <Route exact path='/users' component={UsersContainer} />
          <Route exact path='/users/:id' component={UserPage} />
          <Route exact path='/addShow' component={AddShowForm} />
          <Route exact path='/shows' component={showsContainer} />
          <Route exact path='/shows/:id/user/:userId' component={ShowInfoPage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
