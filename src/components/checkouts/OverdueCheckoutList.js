import { Button, Table } from 'reactstrap';
import { getOverdueCheckouts } from '../../data/checkoutsData.js';
import { useEffect, useState } from 'react';

export const OverdueCheckoutList = () => {
  const [overdueCheckouts, setOverdueCheckouts] = useState([]);

  const fetchOverdueCheckouts = () => {
    getOverdueCheckouts().then(setOverdueCheckouts);
  };

  useEffect(() => {
    fetchOverdueCheckouts();
  }, []);

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
            </tr>
          </thead>
          <tbody>
            {overdueCheckouts.map((c) => (
              <tr key={`checkout-${c.id}`}>
                <td>{`${c.patron.firstName} ${c.patron.lastName}`}</td>
                <td>{c.material.materialName}</td>
                <td>{c.checkoutDate?.split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
