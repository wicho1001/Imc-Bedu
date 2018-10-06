import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route , Switch } from 'react-router-dom'
import UserRegister from './Components/User/UserRegister'
import ImcRegister from './Components/Imc/ImcRegister'



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={UserRegister}  exact/>
            <Route path="/user-detail/:id" component={ImcRegister}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
