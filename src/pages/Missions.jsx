import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getMissions from "../redux/missions/missions-api";

const Missions = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMissions());
    }, [])

    return (
        <div>
            Missions
        </div>
    );
}

export default Missions;