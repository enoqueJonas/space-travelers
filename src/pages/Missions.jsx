import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getMissions from '../redux/missions/missions-api'
import { Table } from 'react-bootstrap'
import Button from '../components/Button/Button.jsx'
import Badge from '../components/Badge/Badge.jsx'

const Missions = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMissions())
  }, [])

  const missions = useSelector(state => state)
  return (
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
              <Badge
                props={
                  i % 2 === 0
                    ? { type: 'active-member', text: 'Active Member' }
                    : { type: 'not-active-member', text: 'Not A Member' }
                }
              />
            </td>
            <td>
              <Button
                props={
                  i % 2 === 0
                    ? { type: 'secondary', text: 'Join Mission' }
                    : { type: 'danger', text: 'Leave Mission' }
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Missions
