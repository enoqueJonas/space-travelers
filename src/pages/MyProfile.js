import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import './Pages.css';

const MyProfile = () => {
  const missions = useSelector((state) => state).filter((mission) => mission.reserved);

  return (
    <div className='my-profile-wrapper'>
      <h2>My Missions</h2>
      <Table striped responsive>
        <thead></thead>
        <tbody>
          {missions.map((mission) => (
            <tr>
                <td>{mission.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyProfile;
