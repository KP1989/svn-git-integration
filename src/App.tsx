import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    console.log("Inside if: ", token);
    return <Login setToken={setToken} />
  }
  return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/home">
                <Dashboard />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
