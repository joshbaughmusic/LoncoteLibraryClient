import { useEffect, useState } from 'react';
import { deactivatePatron, getPatrons } from '../../data/patronsData.js';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export const PatronsList = () => {
  const [allPatrons, setAllPatrons] = useState([]);

  const getAllPatrons = () => {
    getPatrons().then(setAllPatrons);
  };

  const handleDeactivate = e => {
    deactivatePatron(e.target.value)
    getAllPatrons();
  }

  useEffect(() => {
    getAllPatrons();
  }, []);

  return (
    <>
      <div className="container">
        <div className="sub-menu bg-light">
          <h4>Patrons</h4>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allPatrons.sort((a,b) => a.id - b.id).map((p) => (
              <tr key={`patrons-${p.id}`}>
                <th scope="row">{p.id}</th>
                <td>
                  {p.firstName} {p.lastName}
                </td>
                {p.isActive ? (
                  <td>
                    <p>&#x2705;</p>
                    <Button
                    color='danger'
                    value={p.id}
                    onClick={handleDeactivate}
                    >Deactivate</Button>
                  </td>
                ) : (
                  <td>
                    <p>&#10060;</p>
                  </td>
                )}
                <td><Link to={`${p.id}`}>Details</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
