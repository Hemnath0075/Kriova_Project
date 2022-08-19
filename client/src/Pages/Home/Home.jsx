import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Badge from "react-bootstrap/Badge";
import Avatar from "../../assets/user.png";
import Card from "react-bootstrap/Card";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function Home() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Company Production",
        data: [33, 53, 85, 41, 44, 65,67,69,73,79,85,90],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      }
    ],
  };
  return (
    <>
      <Header />
      <div className="home-container flex flex-col">
        <div className="home-imagecontainer">
          <div className="hero-container bg-slate-800 w-fit h-fit absolute m-24 bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg">
            <h1 className="italic font-sans text-3xl md:text-7xl text-left ml-4 md:ml-8 text-white">
              Be Innovative!!
            </h1>
            <h1 className="italic font-sans text-3xl md:text-7xl text-left ml-4 md:ml-8 text-white">
              Be Creative!!
            </h1>
            <h1 className="italic font-sans text-3xl md:text-7xl text-left ml-4 md:ml-8 text-white">
              Be Positve!!
            </h1>
          </div>
        </div>
        <div className="card-container p-12 h-auto bg-blue-50 flex flex-col-reverse md:flex-row">
          <div className="card-details md:p-20 p-12 w-full md:w-2/4 bg-blue-700 rounded-b-2xl md:rounded-l-2xl md:rounded-br-none">
            <Badge bg="success" className="p-2 px-4 text-2xl">
              Active
            </Badge>
            <div className="text-white text-lg ">
              <p></p>
              <p className="text-xl">{1001}</p>
              <p>
                Name:<h1 className="ml-12 text-lg inline">{"Hemnath"}</h1>
              </p>
              <p>
                DOB:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
              <p>
                Email:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
              <p>
                Street:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
              <p>
                City:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
              <p>
                State:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
              <p>
                Cuntry:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
              <p>
                Pincode:<h1 className="ml-12 text-lg inline">{}</h1>
              </p>
            </div>
          </div>
          <div className="card-image md:p-20 p-12 w-full md:w-2/4 bg-blue-700 rounded-t-2xl md:rounded-r-xl md:rounded-tl-none md:rounded-bl-none ">
            <img src={Avatar} alt="" className="h-40 md:h-80 ml-8 " />
          </div>
        </div>
        <div className="bg-blue-50 w-full h-auto p-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Company Moto</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                animi earum optio, ducimus non ipsa sed dignissimos magnam
                corrupti culpa itaque, odit obcaecati distinctio, amet ipsum.
                Distinctio temporibus quo dignissimos?
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-blue-50 w-full h-auto p-4">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Company Stats</Card.Title>
              <Line data={data} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
