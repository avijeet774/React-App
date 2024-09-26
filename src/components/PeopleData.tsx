import { People } from "../Interfaces/People";
import { Button, Table } from "react-bootstrap";
import { Data } from "../Interfaces/People";
import Editmodal from "./Modal";
import { useEffect, useState } from "react";
import { myPeoples } from "../Data/Peopledata";

const PeopleData: React.FC<Data> = () => {
  const [show, setShow] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);
  const [peopleId, setPeopleId] = useState<number>(0);
  const [people, setPeople] = useState(myPeoples);
  const [updatePeople, setUpdatePeople] = useState<any>([]);
  
  
  
  const handleShow = (id: number, action: string) => {
    if (action == "view") {
      setIsView(true);
    } else {
      setIsView(false);
    }
    setPeopleId(id);
    setShow(true);
    const filterPeople = people.filter((p) => p.id == id);
    setUpdatePeople(filterPeople[0]);
  };
  
  
  
 const handleClose = () => setShow(false);

  
  
  const handleChange = (field: string, value: string | number) => {
    setUpdatePeople({
      ...updatePeople,
      [field]: value,
    });
  };

  
  
  const handleSave = () => {
    setPeople((prevPeople) => {
      return prevPeople.map((person) => {
        if (person.id == updatePeople.id) {
          return { ...person, ...updatePeople };
        }
        return person;
      });
    });
    setShow(false);
  };
  
  
  
  const handleDelete=(id:number)=>{
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
  });
};
 
  return (
    <div>
      <Table striped bordered hover variant="primary" className="text-center">
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p, index) => (
            <tr key={index}>
              <td>{++index}</td>
              <td>{p.Name}</td>
              <td>{p.Age}</td>
              <td>{p.Address}</td>
              <td>
                <Button onClick={() => handleShow(p.id, "edit")} variant="warning">
                  Edit
                </Button>
                <Button onClick={() => handleShow(p.id, "view")} variant="success">
                  View
                </Button>
                <Button onClick={()=>handleDelete(p.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Editmodal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        id={peopleId}
        people={updatePeople}
        handleChange={handleChange}
        handleSave={handleSave}
        isView={isView}
      />
    </div>
  );
};
export default PeopleData;
