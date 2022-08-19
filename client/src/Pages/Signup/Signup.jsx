import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NonLoggedHeader from "../../Components/NonLoggedHeader/index";
import { GetUser, loginUser, signupUser, SignupUser, UserStatus } from "../../Redux/features/user";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
  const history=useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    empName:"",
    dob:"",
    street:"",
    city:"",
    state:"",
    country:"",
    phno:""
  });
  const loggeduser = useSelector(GetUser);
  const status = useSelector(UserStatus);
  // console.log(loggeduser);
  const { email, password, empName, dob, street, city, state, country, phno } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "Kriova / Signup";

  }, [status]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    history.push("/login");
    dispatch(signupUser(user));
  };
  return (
    <div className="">
      <NonLoggedHeader />
      <div className="signupimage-container">
        <div className="flex justify-center">
          <div className="wrapper flex flex-col mt-20 pb-10 h-auto w-4/5 sm:w-2/5 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg">
            <header className="flex flex-col justify-start p-4">
              <div className="text-3xl font-bold text-black">
                <h1 className="my-6 text-white text-center">
                  SignUp to Kriova
                </h1>
              </div>
            </header>
            <div className="form-wrapper">
              <form onSubmit={onSubmit}>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="email"
                    name="email"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="password"
                    name="password"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="text"
                    name="empName"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="empName"
                    value={empName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="date"
                    name="dob"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="dob"
                    value={dob}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="text"
                    name="street"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="street"
                    value={street}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="text"
                    name="city"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="city"
                    value={city}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="text"
                    name="state"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="state"
                    value={state}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="text"
                    name="country"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="country"
                    value={country}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="relative w-9/12 ml-auto mr-auto mb-3">
                  <input
                    type="phoneNumber"
                    name="phno"
                    className="border-2 border-gray-400 p-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:border-blue w-full"
                    placeholder="phoneNumber"
                    value={phno}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="text-center m-auto bg-black w-9/12 mt-6">
                  <input
                    type="submit"
                    name="login"
                    id="login"
                    value="Sign Up"
                    className="cursor-pointer bg-blue text-white hover:bg-opacity-90 font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
            <div className="links flex justify-around mt-6 text-blue w-full">
              <div>
                <Link to="/forgotpassword" className="text-xl no-underline">
                  <small className="bg-black text-white  p-1">
                    Forgot password?
                  </small>
                </Link>
              </div>
              <div>
                <Link to="/signin" className="text-xl no-underline">
                  <small className="bg-black text-white  p-1">
                    Sign In Here!
                  </small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
