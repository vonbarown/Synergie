import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/navBar'
import './App.css';
import { Users } from './components/users';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route to='/users' component={Users}></Route>
      </Switch>
    </div>
  );
}

export default App;
