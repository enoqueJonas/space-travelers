import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import getMissions from '../redux/missions/missions-api';
import Button from '../components/Buttons/Button.js';
import Badge from '../components/Badges/Badge.js';
import { missionJoined, missionLeft } from '../redux/missions/missions';
import './Pages.css';

const Missions = () => {
  const dispatch = useDispatch();

  const handleClick = (target) => {
    if (target.className === 'secondary') {
      dispatch(missionJoined(target.id));
    } else {
      dispatch(missionLeft(target));
    }
  };

  const missions = useSelector((state) => state);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  console.log(missions);
  return (
    <div className='table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((miss) => (
            <tr>
              <td>{miss.name}</td>
              <td>{miss.description}</td>
              <td className='align-middle'>
                <Badge mission={miss} />
              </td>
              <td className='align-middle'>
                <Button mission={miss} addHandleClick={handleClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
