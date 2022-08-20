import React from "react";
import { useSelector } from "react-redux";
import {Redirect,Route} from 'react-router-dom';

function ProtectedRoute({component:Component,...rest}){
    const isAuth=useSelector((state)=>state.users.status);
    return(
        <Route
        {...rest}
        render={(props)=>{
            if(isAuth){
                return <Component/>;
            }
            else{
                return (
                    <Redirect to={{pathname:"/signin",state:{from:props.location}}}/>
                );
            }
        }}
        
        />
    )
}

export default ProtectedRoute;