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

export const PatronEdit = ({ patron }) => {
  const [modal, setModal] = useState(false);
  const [updatedPatron, setUpdatedPatron] = useState({});

  const toggle = () => setModal(!modal);

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
              <Label htmlFor="patronAddress">Address:</Label>
              <Input
                id="patronName"
                name="patronName"
                value={null}
              ></Input>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};
