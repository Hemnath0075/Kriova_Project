
import { useState } from 'react';
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ProtectedRoute from './ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuth, setIsAuth]=useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin" exact component={Login}></Route>
          <ProtectedRoute path="/home" component={Home} isAuth={isAuth} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
