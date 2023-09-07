import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { updatePatron } from '../../data/patronsData.js';

export const PatronEdit = ({ patron, getPatron }) => {
  const [modal, setModal] = useState(false);
  const [updatedPatron, setUpdatedPatron] = useState({});

  const toggle = () => setModal(!modal);

  const initializePatron = () => {
    setUpdatedPatron(patron);
  };

  useEffect(() => {
    initializePatron();
  }, []);

  const handleChange = (e) => {
    setUpdatedPatron({
      ...updatedPatron,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    updatePatron(patron.id, updatedPatron);
    getPatron();
    toggle();
  };

  return (
    <>
      <Button
        color="warning"
        value={patron.id}
        onClick={toggle}
      >
        Edit Patron Details
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Edit Patron Details:</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="address">Address:</Label>
              <Input
                id="address"
                name="address"
                value={updatedPatron.address}
                onChange={handleChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                value={updatedPatron.email}
                onChange={handleChange}
              ></Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            color="secondary"
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
