import { Button, Table } from 'reactstrap';
import { getCheckouts, returnCheckout } from '../../data/checkoutsData.js';
import { useEffect, useState } from 'react';

export const CheckoutList = () => {
  const [checkouts, setCheckouts] = useState([]);

  const fetchCheckouts = () => {
    getCheckouts().then(setCheckouts);
  };

  useEffect(() => {
    fetchCheckouts();
  }, []);

  const handleReturn = e => {
    returnCheckout(e.target.value).then(fetchCheckouts());
    
  }

  return (
    <>
      <div className="container">
        <h3>Checkouts</h3>
        <Table>
          <thead>
            <tr>
              <th>Patron</th>
              <th>Title</th>
              <th>Checkout Date</th>
              <th>Late Fee</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {checkouts.map((c) => {
              return c.returnDate === null ? (
                <tr key={`checkout-${c.id}`}>
                  <td>{`${c.patron.firstName} ${c.patron.lastName}`}</td>
                  <td>{c.material.materialName}</td>
                  <td>{c.checkoutDate?.split('T')[0]}</td>
                  <td>{c.lateFee || 'N/A'}</td>
                  <td>
                    <Button
                      color="warning"
                      value={c.id}
                      onClick={handleReturn}
                    >Return</Button>
                  </td>
                </tr>
              ) : (
                <></>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
