import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import PeopleData from "./components/PeopleData";
import { People } from "./Interfaces/People";
import { myPeoples } from "./Data/Peopledata";

const App: React.FC = () => {
  
  return (
    <div className="App">
      <Header />
      <PeopleData myPeoples={myPeoples} />
    </div>
  );
};

export default App;
