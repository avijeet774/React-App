import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleData from "./components/PeopleData";
import { People } from "./Interfaces/People";

const App: React.FC = () => {
  const myPeoples: People[] = [
    {
      id: 1,
      Name: "Avijeet",
      Age: 22,
      Address: "Khordha",
    },
    {
      id: 2,
      Name: "Sandeep",
      Age: 25,
      Address: "Bbsr",
    },
    {
      id: 3,
      Name: "Sankar",
      Age: 25,
      Address: "Dhenkanal",
    },
    {
      id: 4,
      Name: "Rakesh",
      Age: 25,
      Address: "Bhadrak",
    },
    {
      id: 5,
      Name: "Soumya",
      Age: 23,
      Address: "Cuttack",
    },
  ];
  return (
    <div className="App">
      <Header />
      <PeopleData myPeoples={myPeoples} />
    </div>
  );
};

export default App;
