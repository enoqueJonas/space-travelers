import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMissions from "../redux/missions/missions-api";
import { Table, Button } from "react-bootstrap";

const Missions = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMissions());
    }, [])

    const missions = useSelector((state) => state);
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
                {missions.map(((miss) => (
                    <tr>
                        <td>{miss.name}</td>
                        <td>{miss.description}</td>
                        <td>Not a member</td>
                        <td>
                            <Button variant="danger">Leave Mission</Button>{' '}
                        </td>
                    </tr>
                )))}
            </tbody>
        </Table>
    );
}

export default Missions;