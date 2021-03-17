import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Book from './Components/Book/Book';
import PrivetRouter from './Components/PrivetRouter/PrivetRouter';
export const userContext = createContext();
function App() {
  const [loginUser,setLoginUser]=useState({});
  return (
      <userContext.Provider value={[loginUser,setLoginUser]} >
      <Router>
      <Home></Home>
      <p>Name: {loginUser.name}</p>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRouter path="/book">
            <Book></Book>
          </PrivetRouter>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
