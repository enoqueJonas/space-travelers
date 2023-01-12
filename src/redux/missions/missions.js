export const MISSIONS_RETRIEVED = 'MISSIONS_RETRIEVED';
export const MISSION_JOINED = 'MISSION_JOINED';

const missionsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case `${MISSIONS_RETRIEVED}/fulfilled`:
      return payload.map((mission) => {
        const { mission_id: id, mission_name: name, description } = mission;
        return {
          id,
          name,
          description,
        };
      });
    case MISSION_JOINED:
      return state.map((mission) => {
        if (payload === mission.id) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    default:
      return state;
  }
};

export const missionJoined = (missionID) => ({
  type: MISSION_JOINED,
  payload: missionID,
});

export default missionsReducer;