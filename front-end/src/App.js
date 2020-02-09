import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navBar'
import './App.css';
import UsersContainer from './containers/usersContainer';
import { Home } from './components/Home/Home';
import UserPage from './components/UserPage/UserPage';
import showsContainer from './containers/showsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/users' component={UsersContainer} />
        <Route path='/users/:id' component={UserPage} />
        <Route exact path='/shows' component={showsContainer} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
