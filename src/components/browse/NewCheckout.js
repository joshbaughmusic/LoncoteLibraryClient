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
  Table,
} from 'reactstrap';
import { getPatrons } from '../../data/patronsData.js';
import { checkoutMaterial } from '../../data/browseData.js';

export const NewCheckout = ({ materialId, fetchAvailableMaterials }) => {
  const [patrons, setPatrons] = useState([]);
  const [selectedPatron, setSelectedPatron] = useState(0);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const fetchPatrons = () => {
    getPatrons().then(setPatrons);
  };

  useEffect(() => {
    fetchPatrons();
  }, []);

  const handleCheckout = (e) => {
    const newCheckout = {
      patronId: selectedPatron,
      materialId: materialId
    };
    checkoutMaterial(newCheckout);
    fetchAvailableMaterials();
    toggle();
  };

  return (
    <>
      <Button
        color="primary"
        value={materialId}
        onClick={toggle}
      >
        New Checkout
      </Button>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>New Checkout</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="selectPatron" />
              <Input
                name="selectPatron"
                type="select"
                onChange={(e) => setSelectedPatron(parseInt(e.target.value))}
              >
                <option value={null}>select a patron</option>
                {patrons.map((p) => {
                  return (
                    <>
                      <option value={p.id}>
                        {p.firstName} {p.lastName}
                      </option>
                    </>
                  );
                })}
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={handleCheckout}
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
