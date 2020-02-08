import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navBar'
import './App.css';
import UsersContainer from './containers/usersContainer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route to='/users' component={UsersContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
