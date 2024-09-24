import { People } from "../Interfaces/People";
import { Table } from "react-bootstrap";

interface Data {
  myPeoples: People[];
}
const PeopleData: React.FC<Data> = ({ myPeoples }) => (
  <Table striped bordered hover variant="primary">
    <thead>
      <tr>
        <th>Sl.No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th> 
      </tr>
    </thead>
    <tbody>
      {myPeoples.map((people,index) => (
        <tr key={index}>
          <td>{++index}</td>  
          <td>{people.Name}</td>
          <td>{people.Age}</td>
          <td>{people.Address}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
export default PeopleData;
