import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
// import { UserStatus } from "./Redux/features/user";
import { useSelector } from "react-redux";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const data=useSelector((state)=>state.user);
  console.log("the data of status is",data);
  if(data==="success"){
    setIsAuth(true);
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signin"  component={Login}></Route>
          <Route exact path="/signup"  component={Signup}></Route>
          <Route exact path="/forgotpassword"  component={ForgotPassword}></Route>
          <Route exact path="/resetpassword/:id"  component={ResetPassword}></Route>
          <ProtectedRoute exact path="/home" component={Home} isAuth={isAuth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
