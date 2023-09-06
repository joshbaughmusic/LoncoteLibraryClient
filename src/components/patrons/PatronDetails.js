import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getUniquePatron } from '../../data/patronsData.js';
import { PatronEdit } from './PatronEdit.js';

export const PatronDetails = () => {
  const [patron, setPatron] = useState({});
  const { id } = useParams();

  const getPatron = () => {
    getUniquePatron(id).then(setPatron);
  };

  useEffect(() => {
    getPatron();
  }, []);

  if (!patron.checkouts) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>
          {patron.firstName} {patron.lastName}
        </h2>
        <Table>
          <tbody>
            <tr>
              <th scope="row">Address</th>
              <td>{patron.address}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{patron.email}</td>
            </tr>
            <tr>
              <th scope="row">Balance</th>
              <td>${patron.balance}</td>
            </tr>
          </tbody>
        </Table>
        <PatronEdit patron={patron} />
        <br /><br />
        <h5>Checkouts:</h5>
        {patron.checkouts?.length ? (
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Checkout Date</th>
                <th>Return Date</th>
                <th>Late Fee</th>
              </tr>
            </thead>
            <tbody>
              {patron.checkouts.map((c) => {
                return (
                  <>
                    <tr key={`checkout-${c.id}`}>
                      <td>{c.material.materialName}</td>
                      <td>{c.checkoutDate?.split('T')[0]}</td>
                      <td>{c.returnDate?.split('T')[0] || 'Checked Out'}</td>
                      <td>{c.lateFee || 'N/A'}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <p>No checkouts for this patron</p>
        )}
      </div>
    </>
  );
};
