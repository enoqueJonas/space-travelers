import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getMissions from '../redux/missions/missions-api'
import { Table } from 'react-bootstrap'
import Button from '../components/Buttons/Button.jsx'
import Badge from '../components/Badges/Badge.jsx'
import { missionJoined, missionLeft } from '../redux/missions/missions'

const Missions = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMissions())
  }, [])

  const handleClick = target => {
    if (target.className == 'secondary') {
      dispatch(missionJoined(target.id))
    } else {
      dispatch(missionLeft(target))
    }
  }

  const missions = useSelector(state => state)

  useEffect(() => {}, [missions])

  return (
    <div className='table-wrapper'>
      <Table striped responsive>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((miss, i) => (
            <tr>
              <td>{miss.name}</td>
              <td>{miss.description}</td>
              <td>
                <Badge mission={miss} />
              </td>
              <td>
                <Button mission={miss} addHandleClick={handleClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Missions
