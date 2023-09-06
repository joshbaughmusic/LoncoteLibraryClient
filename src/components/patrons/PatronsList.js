import { useEffect, useState } from 'react';
import { getPatrons } from '../../data/patronsData.js';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export const PatronsList = () => {
  const [allPatrons, setAllPatrons] = useState([]);

  const getAllPatrons = () => {
    getPatrons().then(setAllPatrons);
  };

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
            {allPatrons.map((p) => (
              <tr key={`patrons-${p.id}`}>
                <th scope="row">{p.id}</th>
                <td>
                  {p.firstName} {p.lastName}
                </td>
                {p.isActive ? (
                  <td>
                    <p>&#x2705;</p>
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
