import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Badge from 'react-bootstrap/Badge'
import Avatar from '../../assets/user.png'

function Home() {
  return (
    <>
      <Header />
      <div className="home-container flex flex-col">
        <div className="home-imagecontainer">
          <div className="hero-container bg-slate-800 w-fit h-fit absolute m-24 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg">
            <h1 className="italic font-sans text-3xl md:text-7xl text-left ml-4 md:ml-8 text-white">Be Innovative!!</h1>
            <h1 className="italic font-sans text-3xl md:text-7xl text-left ml-4 md:ml-8 text-white">Be Creative!!</h1>
            <h1 className="italic font-sans text-3xl md:text-7xl text-left ml-4 md:ml-8 text-white">Be Positve!!</h1>
          </div>
        </div>
        <div className="card-container  h-96 bg-blue-50 flex flex-row">
          <div className="card-details p-10 w-2/4">
           <Badge  bg="success">Active</Badge>
           <p>{1001}</p>
           <p>Name:{}</p>
           <p>DOB:{}</p>
           <p>Email:{}</p>
           <p>Street:{}</p>
           <p>City:{}</p>
           <p>State:{}</p>
           <p>Cuntry:{}</p>
           <p>Pincode:{}</p>
          </div>
          <div className="card-image p-10 w-2/4">
            <img src={Avatar} alt="" className="w-64"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
