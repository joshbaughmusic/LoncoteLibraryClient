import { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import { removeMaterial } from '../../data/materialsData';
import { Link } from 'react-router-dom';
import { getAvailableMaterials } from '../../data/browseData.js';

export default function BrowseList() {
  const [availableMaterials, setAvailableMaterials] = useState([]);

  const fetchAvailableMaterials = () => {
    getAvailableMaterials().then(setAvailableMaterials);
  };

  useEffect(() => {
    fetchAvailableMaterials();
  }, []);


  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Available Materials</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Type</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {availableMaterials.map((m) => (
            <tr key={`materials-${m.id}`}>
              <th scope="row">{m.id}</th>
              <td>{m.materialName}</td>
              <td>{m.materialType?.name}</td>
              <td>{m.genre?.name}</td>
              <td>
                <Link to={`/materials/${m.id}`}>Details</Link>
              </td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
