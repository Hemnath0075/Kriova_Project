import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
// import { UserStatus } from "./Redux/features/user";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./Redux/features/user";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state)=>state.users.status)
  useEffect(()=>{
    const id=localStorage.getItem("user");
    console.log(id);
    if(id){
      console.log("the code is working")
      console.log(isAuth)
      dispatch(isUserLoggedIn({id:id}))
    }
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signin"  component={Login}></Route>
          <Route exact path="/signup"  component={Signup}></Route>
          <Route exact path="/forgotpassword"  component={ForgotPassword}></Route>
          <Route exact path="/resetpassword/:id"  component={ResetPassword}></Route>
          <ProtectedRoute exact path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
