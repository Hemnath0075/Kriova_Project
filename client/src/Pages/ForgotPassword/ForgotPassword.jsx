import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import NonLoggedHeader from "../../Components/NonLoggedHeader/index";
import { forgotPassword, GetUser, loginUser, UserStatus } from "../../Redux/features/user";
import "../Login/Login.css";
import {useDispatch,useSelector} from 'react-redux';


function ForgotPassword() {
    const [user, setUser] = useState({
        email: "",
      });
      const loggeduser=useSelector(GetUser);
      const status=useSelector(UserStatus);
      console.log(loggeduser);
      const { email  } = user;
      const dispatch = useDispatch();
      useEffect(() => {
        document.title = "Kriova / ForgotPassword";
        if (status === "success") {
          <Redirect to={'/signin'}/>
        }
      }, [status]);
    
      const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(user));
      };
      return (
        <div className="">
          <NonLoggedHeader />
          <div className="image-container">
            <div className="flex justify-center">
              <div className="wrapper flex flex-col mt-20 pb-10 h-auto w-4/5 sm:w-2/5 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg">
                <header className="flex flex-col justify-start p-4">
                  <div className="text-3xl font-bold text-black">
                    <h1 className="my-6 text-white text-center">Enter Your Mail to Send Link</h1>
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
                    <div className="text-center m-auto bg-black w-9/12 mt-6">
                      <input
                        type="submit"
                        name="login"
                        id="login"
                        value="Submit"
                        className="cursor-pointer bg-blue text-white hover:bg-opacity-90 font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:bg-opacity-90"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ForgotPassword