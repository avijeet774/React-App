import React from "react";
import { Button, Modal } from "react-bootstrap";
import { EditmodalProps } from "../Interfaces/People";

const Editmodal: React.FC<EditmodalProps> = ({
  show,
  setShow,
  handleClose,
  id,
  people,
  handleChange,
  handleSave,
  isView
}) => {



  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {isView ? "View Data" : "Edit Your Data"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {
            isView ? 
            <div>
                <h1>Name : {people.Name}</h1>
                <h3>Age : {people.Age}</h3>
                <h3>Address : {people.Address}</h3>
            </div>
            :
            <form>
            <label>Name:</label>
            <input
                type="text"
                value={people.Name}
                onChange={(e) => handleChange("Name", e.target.value)}
            />
            <br />
            <label>Age:</label>
            <input
                type="number"
                value={people.Age}
                onChange={(e) => handleChange("Age", parseInt(e.target.value))}
            />
            <br />
            <label>Address:</label>
            <input
                type="text"
                value={people.Address}
                onChange={(e) => handleChange("Address", e.target.value)}
            />
            </form>
        }
      </Modal.Body>
      
        <Modal.Footer>
            {
                isView ? 
                <Button onClick={handleClose}>Close</Button>
                :<React.Fragment>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleSave}>Save</Button>
                </React.Fragment>
            }
        </Modal.Footer>
     
    </Modal>
  );
};
export default Editmodal;
